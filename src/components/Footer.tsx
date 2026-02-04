
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider">Hickory & Stein</h3>
            <p className="text-sm leading-relaxed mb-6">
              A tribute to the twin arts of Texas fire-smoking and Bavarian brewing. Come hungry, leave happy.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-orange-500 hover:text-white rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-600 hover:text-white rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Visit Us</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
              <address className="not-italic text-sm">
                1842 Smokehouse Lane<br />
                Austin, TX 78702
              </address>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-5 w-5 text-orange-500 shrink-0" />
              <a href="tel:+15125550199" className="text-sm hover:text-white transition-colors">(512) 555-0199</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-orange-500 shrink-0" />
              <a href="mailto:prost@hickorystein.com" className="text-sm hover:text-white transition-colors">prost@hickorystein.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-orange-500 shrink-0" />
              <ul className="text-sm space-y-2">
                <li className="flex justify-between w-full max-w-[160px]">
                  <span>Wed - Thu</span>
                  <span className="text-white">4pm - 10pm</span>
                </li>
                <li className="flex justify-between w-full max-w-[160px]">
                  <span>Fri - Sat</span>
                  <span className="text-white">11am - 12am</span>
                </li>
                <li className="flex justify-between w-full max-w-[160px]">
                  <span>Sun</span>
                  <span className="text-white">11am - 9pm</span>
                </li>
                <li className="text-stone-600 mt-2">Mon - Tue: Closed for Smoking</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-xs mb-4">Join "The Pit Crew" for secret menu items and event invites.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-stone-900 border border-stone-800 rounded-sm px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
              />
              <Button className="bg-orange-700 hover:bg-orange-600 text-white rounded-sm w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Hickory & Stein. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
