import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigada por escolher o S.A.M.B.A! 💚"
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "E-mail",
    content: "sambabrechocolaborativo@gmail.com",
    link: "mailto:sambabrechocolaborativo@gmail.com"
  }, {
    icon: Phone,
    title: "WhatsApp",
    content: "(48) 99133-7240",
    link: "https://wa.me/5548991337240"
  }, {
    icon: MapPin,
    title: "Localização",
    content: "R. Anita Garibaldi, 159 - Florianópolis / SC",
    link: "#"
  }, {
    icon: Instagram,
    title: "Instagram",
    content: "@sambabrechocolaborativo",
    link: "https://www.instagram.com/sambabrechocolaborativo/"
  }];
  return <section id="contato" className="section-padding bg-gradient-subtle w-full overflow-hidden">
      <div className="container-samba">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
            Vamos conversar?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quer saber mais sobre uma peça? Tem uma dúvida? Ou simplesmente quer bater um papo sobre moda sustentável? 
            Estamos aqui para você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 w-full max-w-full">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 w-full">
            <div className="w-full">
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 px-2">
                Outras formas de contato
              </h3>
              
              <div className="space-y-4 md:space-y-6 px-2">
                {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return <div 
                  key={index} 
                  onClick={() => {
                    if (index === 2) {
                      window.open("https://www.google.com/search?q=samba+brech%C3%B3+colaborativo&oq=samba+brech%C3%B3+colaborativo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDYwOTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8", '_blank');
                    } else if (index === 3) {
                      window.open("https://www.instagram.com/sambabrechocolaborativo/", '_blank');
                    } else if (info.link.startsWith('http')) {
                      window.open(info.link, '_blank');
                    } else if (info.link.startsWith('mailto:')) {
                      window.location.href = info.link;
                    }
                  }}
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover group cursor-pointer w-full max-w-full overflow-hidden"
                >
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <h4 className="font-poppins font-medium text-foreground text-sm md:text-base truncate">
                          {info.title}
                        </h4>
                        <p className="font-poppins text-muted-foreground text-xs md:text-sm break-words">
                          {info.content}
                        </p>
                      </div>
                    </div>;
              })}
              </div>
            </div>

            {/* Instagram Feed Placeholder */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;