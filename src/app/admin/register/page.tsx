
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { LogIn, UserPlus, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { addUser } from '@/lib/firebase/database';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'الرجاء إدخال بريد إلكتروني صالح.' }),
  password: z.string().min(6, { message: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.' }),
});

export default function AdminRegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    
    try {
      await addUser(values);
      toast({
        title: "تم إنشاء الحساب بنجاح!",
        description: "يمكنك الآن تسجيل الدخول باستخدام بياناتك الجديدة.",
        className: 'bg-accent text-accent-foreground border-0',
      });
      router.push('/admin/login');
    } catch (e: any) {
        setError('حدث خطأ أثناء محاولة إنشاء الحساب. يرجى المحاولة مرة أخرى.');
        console.error(e);
    } finally {
        setLoading(false);
    }
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] max-w-7xl items-center justify-center px-4 py-16 md:px-6 lg:py-24">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-headline text-center text-3xl font-bold">إنشاء حساب مشرف جديد</CardTitle>
          <CardDescription className="text-center">
            أدخل البيانات لإنشاء حساب جديد
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
                 <Terminal className="h-4 w-4" />
                <AlertTitle>خطأ في إنشاء الحساب</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@example.com" {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'جارٍ الإنشاء...' : 'إنشاء حساب'}
                <UserPlus className="ms-2 h-5 w-5" />
              </Button>
            </form>
          </Form>
        </CardContent>
         <CardFooter className="flex-col gap-4">
            <div className="text-center text-sm">
                لديك حساب بالفعل؟{' '}
                <Button variant="link" asChild className="p-0">
                    <Link href="/admin/login">
                        تسجيل الدخول
                        <LogIn className="ms-1 h-4 w-4" />
                    </Link>
                </Button>
            </div>
             <p className="text-xs text-muted-foreground mx-auto">
                هذه الصفحة مخصصة للمشرفين فقط.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
