import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Asked() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-xl bg-muted p-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>چطور می‌توانم سفارشم را پیگیری کنم؟</AccordionTrigger>
        <AccordionContent>
          وارد سایت شوید. روی گزینه سفارش‌های من کلیک کنید. در این قسمت با کلیک
          روی جزییات می‌توانید سفارش خود را ببینید. می‌توانید در این قسمت روند
          آماده‌سازی و مراحل ارسال سفارش خود را پیگیری کنید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>چطور میتوانم سفارشم را لغو کنم ؟</AccordionTrigger>
        <AccordionContent>
          شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال
          آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو سفارش به
          توضیحات تکمیلی مراجعه کنید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          شرایط استفاده از کد تخفیف چیست؟
        </AccordionTrigger>
        <AccordionContent>
          سیستم هوشمند دیجی ما پس از بررسی حساب کاربری در صورتی که مالک آن مشتری
          جدید باشد، امکان استفاده از کد تخفیف خرید اول را ایجاد .می کند
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>چطور میتوانم امتیاز‌ بگیریم؟ </AccordionTrigger>
        <AccordionContent>
          بعد از ساخت حساب کاربری ، می توانید با یکی از روش های زیر امتیاز کسب
          کنید.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
