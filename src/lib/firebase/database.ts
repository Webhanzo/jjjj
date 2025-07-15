// src/lib/firebase/database.ts
import type { ContactMessage, Order, Product, AdminUser } from '../types';
import { localDatabase } from '../local-data';

function toObject<T>(arr: T[], key: keyof T): { [key: string]: T } {
  return arr.reduce((acc, item) => {
    const itemKey = item[key] as string;
    acc[itemKey] = item;
    return acc;
  }, {} as { [key: string]: T });
}

// --- Generic Functions ---

export async function getDocument<T>(path: string): Promise<T | null> {
    try {
      // Simulate fetching from a local object based on path
      const pathParts = path.split('/');
      let data: any = localDatabase;
      for (const part of pathParts) {
        if (data && typeof data === 'object' && part in data) {
          data = data[part];
        } else {
          return null; // Path not found
        }
      }
      return data as T;
    } catch (error) {
      console.error(`Error getting document from local data at ${path}:`, error);
      return null;
    }
}
  
export async function updateDocument(path: string, data: any): Promise<void> {
    console.warn(`Local data mode: updateDocument for path "${path}" is not implemented. Data will not be persisted.`);
    // In a real local-only app, you might update the in-memory object,
    // but it won't persist across page reloads without additional logic (like localStorage).
    return Promise.resolve();
}
  
// --- Legacy Functions now read from local data ---
export async function getHeaderData() {
  return getDocument<{ logo: string; width?: number; height?: number; }>('header');
}

export async function getFooterData() {
    return getDocument<{ about: string; facebook: string; instagram: string; logo: string; phone1: string; phone2: string; whatsapp: string; width?: number; height?: number; }>('footer');
}
  
export async function getHomeImage() {
    return getDocument<string>('homeImage');
}
    
export async function getSpecialAd() {
    return getDocument<{ image: string; link: string; text: string; visible: boolean; adWidth?: number; adHeight?: number; adPosition?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'center'; }>('specialAds');
}


// --- Product Functions now read from local data ---

export async function getProducts(): Promise<Product[]> {
  const productsData = await getDocument<{ [key: string]: any }>('products');
  if (!productsData) return [];
  // The local data is already an array, so just return it.
  // If it were an object, you'd map over it.
  return localDatabase.products as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const products = await getProducts();
    const product = products.find(p => p.slug === slug);
    return product || null;
}

export async function getProductById(id: string): Promise<Product | null> {
    const products = await getProducts();
    return products.find(p => p.id === id) || null;
}


export async function addProduct(product: Omit<Product, 'id' | 'slug' | 'timestamp'>): Promise<string | null> {
    console.warn(`Local data mode: addProduct is not implemented. Data will not be persisted.`);
    return Promise.resolve(null);
}

export async function updateProduct(productId: string, product: Partial<Product>): Promise<void> {
    console.warn(`Local data mode: updateProduct for ID "${productId}" is not implemented. Data will not be persisted.`);
    return Promise.resolve();
}

export async function deleteProduct(productId: string): Promise<void> {
    console.warn(`Local data mode: deleteProduct for ID "${productId}" is not implemented. Data will not be persisted.`);
    return Promise.resolve();
}

// --- User Functions ---
export async function verifyUserCredentials(email: string, pass: string): Promise<AdminUser | null> {
    const users = localDatabase.users as AdminUser[];
    const user = users.find(u => u.email === email && u.password === pass);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    return null;
}

export async function addUser(user: Omit<AdminUser, 'id'>): Promise<string | null> {
    console.warn(`Local data mode: addUser is not implemented. Data will not be persisted.`);
    return Promise.resolve(null);
}

// --- Message Functions ---

export async function addMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<void> {
    console.warn(`Local data mode: addMessage is not implemented. Data will not be persisted.`);
    return Promise.resolve();
}

export async function getMessages(): Promise<ContactMessage[]> {
    const messagesData = localDatabase.messages;
    if (!messagesData) return [];

    return Object.entries(messagesData).map(([id, msgData]: [string, any]) => ({
        id,
        name: msgData.name,
        phone: msgData.phone,
        message: msgData.message,
        createdAt: new Date(msgData.createdAt || msgData.timestamp),
    }));
}


// --- Order Functions ---

export async function addOrder(order: Omit<Order, 'id' | 'timestamp'>): Promise<void> {
    console.warn(`Local data mode: addOrder is not implemented. Data will not be persisted.`);
    return Promise.resolve();
}


export async function getOrders(): Promise<Order[]> {
    const ordersData = localDatabase.orders;
    if (!ordersData) return [];

    return Object.entries(ordersData).map(([id, orderData]: [string, any]) => ({
        id,
        fullName: orderData.fullName,
        phoneNumber: orderData.phoneNumber,
        deliveryMethod: orderData.deliveryMethod,
        city: orderData.city,
        landmark: orderData.landmark,
        items: orderData.items,
        timestamp: new Date(orderData.timestamp),
    }));
}
