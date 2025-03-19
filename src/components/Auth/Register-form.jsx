import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account with us.</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-x-2 items-center justify-between'>
                <div className='grid gap-3 w-full'>
                  <Label htmlFor='fName'>First Name</Label>
                  <Input
                    id='fName'
                    type='text'
                    placeholder='Open Source'
                    required
                  />
                </div>
                <div className='grid gap-3 w-full'>
                  <Label htmlFor='sName'>Surname</Label>
                  <Input
                    id='sName'
                    type='text'
                    placeholder='Open source'
                    required
                  />
                </div>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='country'>Country</Label>
                <Input id='country' type='text' placeholder='Github' required />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='password'>Create Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Create Password'
                  required
                />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='password'>Confirm Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Confirm Password'
                  required
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Button type='submit' className='w-full'>
                  Login
                </Button>
                <Button variant='outline' className='w-full'>
                  Login with Google
                </Button>
              </div>
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{" "}
              <a href='#' className='underline underline-offset-4'>
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
