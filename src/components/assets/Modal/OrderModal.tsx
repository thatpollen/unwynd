import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/reusable/dialog';
// import SubscribeButton from "@/components/assets/buttons/SubscribeButton";
import NewsletterSignUpForm from '../NewsletterSignUpForm';

interface OrderModalProps {
 isOpen: boolean;  
 setIsOpen: (value: boolean) => void;
}

export default function OrderModal({ isOpen, setIsOpen }: OrderModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="orderModal max-w-full md:max-w-[520px] h-max flex flex-col gap-8 p-10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-text-primary">
           The Unwynd lamp is almost ready to shine, <span className='text-text-tertiary'>
            but it&apos;s still in the final stages of enlightenment.
           </span>
            </DialogTitle>
            <DialogDescription>
              Sign up for our newsletter, and you&apos;ll be the first to know when it&apos;s ready to light up your zen space!
              </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>    
                           <NewsletterSignUpForm variant='modal'/>
          </DialogFooter>
        </DialogContent>
      </Dialog>    
    );
}