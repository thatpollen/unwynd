import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/reusable/dialog";
// import SubscribeButton from "@/components/assets/buttons/SubscribeButton";
import NewsletterSignUpForm from "../NewsletterSignUpForm";
import { useTranslations } from "next-intl";
interface OrderModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function OrderModal({ isOpen, setIsOpen }: OrderModalProps) {
  const t = useTranslations("OrderModal");

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="orderModal max-w-full md:max-w-[520px] h-max flex flex-col gap-8 p-10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-text-primary">
            {t("headingOne")}
            <span className="text-text-tertiary">{t("headingTwo")}</span>
          </DialogTitle>
          <DialogDescription>{t("subHeading")}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <NewsletterSignUpForm variant="modal" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
