"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInView } from "react-intersection-observer";
import {
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  FileText,
  AlertCircle,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z
    .string()
    .min(10, { message: "Please enter a valid mobile number." }),
  category: z.string().min(1, { message: "Please select a category." }),
  message: z
    .string()
    .min(10, { message: "Please tell us more about your query." }),
});

type FormValues = z.infer<typeof formSchema>;

const queryCategories = [
  { id: "course", label: "Course / Blueprint Access" },
  { id: "pocket-money", label: "Pocket Money Program" },
  { id: "affiliate", label: "Affiliate Earnings / Dashboard" },
  { id: "tools", label: "Tool or Plugin Access" },
  { id: "business", label: "Business Collaboration" },
  { id: "other", label: "Something Else" },
];

const contactSections = [
  {
    title: "General Support & Customer Queries",
    icon: <MessageSquare className="h-5 w-5" />,
    details: [
      "Course Access (Free Blueprint / Pro Plan / Expert Suite)",
      "Login Issues or Dashboard Errors",
      "Pocket Money Program Payouts",
      "Software, Tools & Plugin Access",
      "Community or Telegram Group Entry",
    ],
    contact: [
      { type: "Email", value: "support@sportstradex.in" },
      { type: "Phone / WhatsApp", value: "+91 98765 43210" },
      { type: "Response Time", value: "Within 24 business hours" },
      {
        type: "Live Support",
        value: "Monday–Saturday, 10:00 AM – 6:00 PM IST",
      },
    ],
  },
  {
    title: "Affiliate & Partnership Enquiries",
    icon: <Users className="h-5 w-5" />,
    details: [
      "Commission Dashboard Help",
      "Referral Payouts",
      "Tracking Issues / System Bugs",
      "New Partner Applications",
    ],
    contact: [
      { type: "Email", value: "affiliate@sportstradex.in" },
      { type: "WhatsApp", value: "+91 98765 43210" },
      { type: "Documentation", value: "coming soon" },
    ],
  },
  {
    title: "Legal & Compliance",
    icon: <FileText className="h-5 w-5" />,
    details: [
      "Policy-related inquiries",
      "Copyright issues",
      "Disclaimers",
      "Platform compliance",
    ],
    contact: [
      { type: "Compliance Team", value: "legal@sportstradex.in" },
      { type: "Data & Privacy", value: "privacy@sportstradex.in" },
    ],
  },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      category: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Always show success popup after 1.5s regardless of actual submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);

    // Show custom success popup
    showSuccessPopup();

    form.reset();
    setIsSubmitting(false);
  }

  const showSuccessPopup = () => {
    // Create popup element
    const popup = document.createElement("div");

    // Check if mobile (screen width < 640px)
    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      popup.className =
        "fixed bottom-4 right-4 left-4 z-50 bg-[#C3FF72] border-2 border-[#0a2a2f] rounded-xl p-4 shadow-lg flex items-center gap-3 animate-bounce max-w-sm mx-auto";
    } else {
      popup.className =
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#C3FF72] border-2 border-[#0a2a2f] rounded-xl px-6 py-4 shadow-lg flex items-center gap-3 animate-bounce";
    }

    popup.innerHTML = `
      <div class="w-6 h-6 bg-[#0a2a2f] rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-4 h-4 text-[#C3FF72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-[#0a2a2f] text-sm sm:text-base truncate">Message Sent Successfully!</p>
        <p class="text-[#0a2a2f] text-xs sm:text-sm opacity-80">We'll respond within 24-48 hours</p>
      </div>
    `;

    // Add to document
    document.body.appendChild(popup);

    // Remove after 5 seconds with fade out
    setTimeout(() => {
      popup.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
      popup.style.opacity = "0";

      if (isMobile) {
        popup.style.transform = "translateY(20px)";
      } else {
        popup.style.transform = "translate(-50%, -20px)";
      }

      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 500);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-20 md:py-24 flex justify-center bg-white"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#0a2a2f] leading-tight px-2">
            Contact SportsTradex — We&apos;re Here to Help You Succeed
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto px-4">
            At SportsTradex, we&apos;re committed to guiding learners, creators,
            and sports enthusiasts through every step of their journey in
            skill-based sports trading and analytics.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
          >
            {/* Head Office */}
            <motion.div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C3FF72] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#0a2a2f]" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0a2a2f]">
                  Head Office
                </h2>
              </div>

              <div className="pl-2 border-l-2 border-[#C3FF72] ml-5 sm:ml-6">
                <div className="space-y-1 text-sm sm:text-base text-gray-700">
                  <p className="font-medium">
                    SportsTradex Technologies Private Limited
                  </p>
                  <p>Level 3, Spaces & More Business Centre</p>
                  <p>Plot No. 17, Kavuri Hills, Phase 1</p>
                  <p>Madhapur, Hitech City</p>
                  <p>Hyderabad, Telangana – 500081</p>
                  <p>India</p>
                </div>

                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-[#0a2a2f] mt-0.5 flex-shrink-0" />
                    <div className="text-sm sm:text-base text-gray-700">
                      <p>
                        <span className="font-medium">Support Hours:</span>{" "}
                        Monday to Saturday, 10:00 AM – 6:00 PM IST
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        (Sundays and Indian National Holidays – Closed)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Sections */}
            {contactSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C3FF72] flex items-center justify-center flex-shrink-0">
                    <div className="text-[#0a2a2f]">{section.icon}</div>
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0a2a2f] leading-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-2 border-l-2 border-[#C3FF72] ml-5 sm:ml-6">
                  <p className="font-medium text-gray-700 mb-3 text-sm sm:text-base">
                    For any questions related to:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-5 mb-4 sm:mb-6 text-gray-700 space-y-1 text-sm sm:text-base">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 sm:space-y-3">
                    {section.contact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {item.type.includes("Email") ? (
                          <Mail className="h-4 w-4 text-[#0a2a2f] mt-0.5 flex-shrink-0" />
                        ) : item.type.includes("Phone") ||
                          item.type.includes("WhatsApp") ? (
                          <Phone className="h-4 w-4 text-[#0a2a2f] mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-[#0a2a2f] mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          <span className="font-medium">{item.type}:</span>{" "}
                          <span className="break-words">{item.value}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0a2a2f] mb-4 sm:mb-6">
                Social Media & Community Channels
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Stay updated with announcements, course sneak peeks, platform
                improvements, and real-time insights:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-[#C3FF72] transition-all duration-200 group"
                >
                  <Instagram className="h-5 w-5 text-[#0a2a2f] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 truncate">
                    @sportstradexindia
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-[#C3FF72] transition-all duration-200 group"
                >
                  <MessageSquare className="h-5 w-5 text-[#0a2a2f] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 truncate">
                    Telegram Channel
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-[#C3FF72] transition-all duration-200 group"
                >
                  <Youtube className="h-5 w-5 text-[#0a2a2f] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 truncate">
                    SportsTradex Official
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-[#C3FF72] transition-all duration-200 group"
                >
                  <Linkedin className="h-5 w-5 text-[#0a2a2f] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 truncate">
                    SportsTradex Technologies
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="rounded-2xl sm:rounded-3xl bg-[#C3FF72] p-6 sm:p-8 lg:p-10 h-fit lg:sticky lg:top-24"
            variants={containerVariants}
          >
            <motion.div
              className="space-y-6 sm:space-y-8"
              variants={containerVariants}
            >
              <motion.div
                className="space-y-2 sm:space-y-3"
                variants={itemVariants}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#0a2a2f]">
                  Quick Contact Form
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We respond fastest to detailed form submissions. Fill out the
                  form below and we&apos;ll get back to you within 24-48 hours.
                </p>
              </motion.div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5 sm:space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium text-sm sm:text-base">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="border-0 border-b-2 border-black/20 rounded-none bg-transparent px-0 py-2 sm:py-3 focus-visible:ring-0 focus-visible:border-black text-sm sm:text-base placeholder:text-gray-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium text-sm sm:text-base">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@example.com"
                              type="email"
                              className="border-0 border-b-2 border-black/20 rounded-none bg-transparent px-0 py-2 sm:py-3 focus-visible:ring-0 focus-visible:border-black text-sm sm:text-base placeholder:text-gray-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium text-sm sm:text-base">
                            Mobile Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your mobile number"
                              type="tel"
                              className="border-0 border-b-2 border-black/20 rounded-none bg-transparent px-0 py-2 sm:py-3 focus-visible:ring-0 focus-visible:border-black text-sm sm:text-base placeholder:text-gray-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium text-sm sm:text-base">
                            Category of Query
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-0 border-b-2 border-black/20 rounded-none bg-transparent px-0 py-2 sm:py-3 focus-visible:ring-0 focus-visible:border-black text-sm sm:text-base">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {queryCategories.map((category) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id}
                                >
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium text-sm sm:text-base">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your query in detail..."
                              className="border-0 border-b-2 border-black/20 rounded-none bg-transparent px-0 py-2 sm:py-3 min-h-[100px] sm:min-h-[120px] focus-visible:ring-0 focus-visible:border-black resize-none text-sm sm:text-base placeholder:text-gray-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#0a2a2f] text-white hover:bg-[#0a2a2f]/90 rounded-lg py-4 sm:py-6 flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                    <p className="text-xs sm:text-sm text-gray-700 mt-3 text-center leading-relaxed">
                      Response expected within 24–48 hours (excluding Sundays &
                      holidays)
                    </p>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div className="mt-12 sm:mt-16 lg:mt-20" variants={itemVariants}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a2a2f] mb-4 sm:mb-6 text-center">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-[300px] sm:h-[400px] lg:h-[450px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2954088332393!2d78.38106491487767!3d17.44112888804592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x71680e401e6e741!2sKavuri%20Hills%2C%20Phase%201%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SportsTradex Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="flex justify-center mt-4 sm:mt-6">
            <a
              href="https://maps.google.com/?q=Kavuri+Hills+Phase+1+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a2a2f] hover:text-[#0a2a2f]/70 flex items-center gap-2 text-sm sm:text-base font-medium transition-colors duration-200 hover:underline"
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
