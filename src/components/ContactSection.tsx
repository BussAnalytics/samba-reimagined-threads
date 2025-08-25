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
  return <section id="contato" className="section-padding bg-gradient-subtle">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Outras formas de contato
              </h3>
              
              <div className="space-y-6">
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
                  className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover group cursor-pointer"
                >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-medium text-foreground">
                          {info.title}
                        </h4>
                        <p className="font-poppins text-muted-foreground">
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