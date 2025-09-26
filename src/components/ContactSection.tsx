/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo, personalInfo, socialLinks } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import emailjs from '@emailjs/browser';

import {
  Mail,
  Send,
  ExternalLink,
  Copy,
  Check,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Zap,
  Heart,
  Star,
  Hash,
  Users
} from 'lucide-react';

interface ContactMethod {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface SocialPlatform {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const ContactSection: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = async (text: string, platform: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(platform);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log('Environment variables check:', {
      serviceId: serviceId || 'Missing',
      templateId: templateId || 'Missing',
      publicKey: publicKey || 'Missing'
    });

    if (!serviceId || !templateId || !publicKey) {
      alert('❌ EmailJS configuration is missing. Please check environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Umlyrithy',
        reply_to: formData.email
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('✅ Email sent successfully:', result);
      alert('✅ Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('❌ EmailJS Error:', error);
      alert('❌ Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getContactIcon = (platform: string): React.ReactNode => {
    switch (platform.toLowerCase()) {
      case 'telegram':
        return <Send className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'discord':
        return <Hash className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'email':
        return <Mail className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'facebook':
        return <Users className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'instagram':
        return <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Phone className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const getContactColor = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'telegram':
        return 'from-blue-500 to-blue-600';
      case 'discord':
        return 'from-indigo-500 to-purple-600';
      case 'email':
        return 'from-red-500 to-pink-600';
      case 'facebook':
        return 'from-blue-500 to-blue-600';
      case 'instagram':
        return 'from-pink-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getContactDescription = (platform: string): string => {
    switch (platform.toLowerCase()) {
      case 'telegram':
        return 'Quick messaging';
      case 'discord':
        return 'Voice & chat';
      case 'email':
        return 'Professional';
      case 'facebook':
        return 'Social updates';
      case 'instagram':
        return 'Visual content';
      default:
        return 'Get in touch';
    }
  };

  const getPriority = (platform: string): 'high' | 'medium' | 'low' => {
    switch (platform.toLowerCase()) {
      case 'email':
      case 'telegram':
        return 'high';
      case 'discord':
        return 'medium';
      default:
        return 'low';
    }
  };

  const contactMethods: ContactMethod[] = contactInfo.map(contact => ({
    ...contact,
    icon: getContactIcon(contact.platform),
    color: getContactColor(contact.platform),
    description: getContactDescription(contact.platform),
    priority: getPriority(contact.platform)
  })).sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const getSocialIcon = (name: string): React.ReactNode => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'linkedin':
        return <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'facebook':
        return <Users className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'instagram':
        return <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <Github className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  const getSocialColor = (name: string): string => {
    switch (name.toLowerCase()) {
      case 'github':
        return 'hover:bg-gray-100 dark:hover:bg-gray-800';
      case 'linkedin':
        return 'hover:bg-blue-50 dark:hover:bg-blue-900/20';
      case 'facebook':
        return 'hover:bg-blue-50 dark:hover:bg-blue-900/20';
      case 'instagram':
        return 'hover:bg-pink-50 dark:hover:bg-pink-900/20';
      default:
        return 'hover:bg-gray-50 dark:hover:bg-gray-800';
    }
  };

  const socialPlatforms: SocialPlatform[] = socialLinks.map(social => ({
    ...social,
    icon: getSocialIcon(social.name),
    color: getSocialColor(social.name)
  }));

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Background Elements - Adjusted for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-orange">#</span>contact
            </h2>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalInfo.connectText}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center space-x-2 mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-orange to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 150 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Let&apos;s <span className="text-orange">Connect</span>
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Choose your preferred way to reach out
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={contact.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${contact.priority === 'high' ? 'border-orange/30 bg-orange/5' : 'border-border/50'
                    }`}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {contact.icon}
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-base sm:text-lg truncate">{contact.platform}</h4>
                            {contact.priority === 'high' && (
                              <motion.div
                                className="px-2 py-1 bg-orange/20 text-orange text-xs rounded-full font-medium whitespace-nowrap"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                Preferred
                              </motion.div>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{contact.description}</p>
                          <p className="text-xs sm:text-sm font-mono bg-muted px-2 py-1 rounded inline-block max-w-full truncate">
                            {contact.username}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 flex-shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:border-orange group-hover:text-orange transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3"
                            asChild
                          >
                            <a
                              href={contact.url}
                              target={contact.platform === 'Email' ? '_self' : '_blank'}
                              rel={contact.platform === 'Email' ? '' : 'noopener noreferrer'}
                              className="flex items-center space-x-1"
                            >
                              <span className="hidden sm:inline">Open</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(contact.username, contact.platform)}
                            className="hover:bg-orange/10 hover:text-orange transition-all duration-300 px-2 sm:px-3"
                          >
                            <AnimatePresence mode="wait">
                              {copiedText === contact.platform ? (
                                <motion.div
                                  key="check"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="copy"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow me on</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialPlatforms.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${social.color} transition-all duration-300 border-2 text-xs sm:text-sm px-2 sm:px-3`}
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 sm:space-x-2"
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <Card className="border-2 border-orange/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Send a <span className="text-orange">Message</span>
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Have a project in mind? Let&apos;s discuss it!
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all duration-300 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange hover:bg-orange/90 text-white py-2 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center justify-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <motion.div
              className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center p-3 sm:p-4 rounded-lg bg-muted/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">24h</p>
                <p className="text-xs text-muted-foreground">Response</p>
              </motion.div>

              <motion.div
                className="text-center p-3 sm:p-4 rounded-lg bg-muted/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">GMT+7</p>
                <p className="text-xs text-muted-foreground">Cambodia</p>
              </motion.div>

              <motion.div
                className="text-center p-3 sm:p-4 rounded-lg bg-muted/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium">Active</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-orange/30 bg-gradient-to-r from-orange/5 via-transparent to-orange/5 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <motion.div
                className="flex items-center justify-center space-x-2 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
                {personalInfo.callToAction}
              </p>
              <Button
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium group"
                asChild
              >
                <a href="mailto:umlyrithyreach@gmail.com" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;