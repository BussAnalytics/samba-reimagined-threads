import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/c/554892033464', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-elegant flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
