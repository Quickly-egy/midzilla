import { FaShippingFast, FaBoxOpen, FaGlobe, FaUndo } from 'react-icons/fa';

export const shippingPolicies = [
  {
    icon: FaShippingFast,
    title: 'Processing Time',
    description: 'Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day.',
  },
  {
    icon: FaBoxOpen,
    title: 'Shipping Rates & Delivery',
    description: 'Shipping charges for your order will be calculated and displayed at checkout. We offer Standard, Expedited, and Overnight options.',
  },
  {
    icon: FaGlobe,
    title: 'International Shipping',
    description: 'We ship worldwide! International shipping rates and delivery times vary by destination and will be calculated at checkout.',
  },
  {
    icon: FaUndo,
    title: 'Returns & Exchanges',
    description: 'We offer a 30-day return policy for most items. Please visit our Returns page for detailed information on how to process a return.',
  },
];

export const shippingFAQ = [
  {
    question: 'How do I track my order?',
    answer: 'Once your order has shipped, you will receive an email with a tracking number and a link to the carrier\'s website. You can also track your order from your account page.',
  },
  {
    question: 'Can I change my shipping address after placing an order?',
    answer: 'If you need to change your shipping address, please contact our customer support team as soon as possible. We can update the address as long as the order has not yet been shipped.',
  },
  {
    question: 'What happens if my package is lost or damaged?',
    answer: 'We are not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.',
  },
  {
    question: 'Do you ship to P.O. boxes or APO/FPO addresses?',
    answer: 'Yes, we ship to P.O. boxes and APO/FPO/DPO addresses via standard shipping methods. Please note that expedited and overnight shipping may not be available for these locations.',
  },
]; 