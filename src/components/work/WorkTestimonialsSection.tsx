import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const WorkTestimonialsSection = () => {
  const [file, setFile] = useState<File | null>(null);

  const form = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
      acceptPrivacy: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data, file);
    // Here you would typically send the data to your server
  };

  return (
    <section className="w-full bg-black">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-dental-gold text-3xl md:text-4xl font-bold text-center mb-4">
          And not because we say so...
        </h2>
        <h3 className="text-dental-gold text-xl md:text-2xl text-center mb-12">
          Testimonials from our colleagues
        </h3>

        <div className="flex flex-col space-y-16">
          {/* First testimonial - Anna */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Avatar className="w-64 h-64 mx-auto">
                <AvatarImage
                  src="/images/avatar/Ellipse 11 (8).png"
                  alt="Anna, CAM Specialist"
                />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:w-2/3">
              <h4 className="text-dental-gold text-2xl font-bold mb-1">ANNA</h4>
              <p className="text-dental-gold font-medium mb-4">
                CAM Specialist
              </p>

              <div className="text-white space-y-4">
                <p>
                  "There's a very close, family-like atmosphere. Although there
                  are quite a few of us now, there's good communication and
                  channels for discussing things directly and frankly."
                </p>
                <p>
                  On the other hand, I like to work with the same level of rigor
                  and perfectionism that we all set for ourselves in all tasks
                  and jobs. That's how we can deliver quality and good service.
                </p>
                <p>
                  "Furthermore, there is never a shortage of incentives here to
                  continue evolving."
                </p>
              </div>
            </div>
          </div>

          {/* Second testimonial - Fabiola */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3">
              <Avatar className="w-64 h-64 mx-auto">
                <AvatarImage
                  src="/images/avatar/Ellipse 11.png"
                  alt="Fabiola, Operations Coordinator"
                />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:w-2/3">
              <h4 className="text-dental-gold text-2xl font-bold mb-1">
                FABIOLA
              </h4>
              <p className="text-dental-gold font-medium mb-4">
                Operations Coordinator
              </p>

              <div className="text-white space-y-4">
                <p>
                  "I love working at Dental Quick because I see our clients
                  appreciate our efforts to provide them with the best service
                  every day."
                </p>
                <p>
                  Management is very sensitive to anything that improves
                  everyone's well-being, and that also includes our training.
                </p>
                <p>
                  "Furthermore, the work environment is very good and there are
                  good personal relationships among colleagues."
                </p>
              </div>
            </div>
          </div>

          {/* Third testimonial - Macarena */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Avatar className="w-64 h-64 mx-auto">
                <AvatarImage
                  src="/images/avatar/Ellipse 11 (1).png"
                  alt="Macarena, CADCAM Coordinator"
                />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:w-2/3">
              <h4 className="text-dental-gold text-2xl font-bold mb-1">
                MACARENA
              </h4>
              <p className="text-dental-gold font-medium mb-4">
                CADCAM Coordinator
              </p>

              <div className="text-white space-y-4">
                <p>
                  "I came from Seville looking for opportunities, and I found
                  them here. Dental Quick has provided me with a great
                  opportunity for professional and salary growth that allows me
                  to enjoy my life, along with a good work schedule."
                </p>
                <p>
                  I work with highly technical colleagues, receive internal
                  training and specialized training, and thanks to all of this,
                  not a day goes by that I don't learn new things and improve my
                  skills."
                </p>
              </div>
            </div>
          </div>

          {/* Fourth testimonial - Kelly */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3">
              <Avatar className="w-64 h-64 mx-auto">
                <AvatarImage
                  src="/images/avatar/Ellipse 11 (6).png"
                  alt="Kelly, Structures Specialist"
                />
                <AvatarFallback>KE</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:w-2/3">
              <h4 className="text-dental-gold text-2xl font-bold mb-1">
                KELLY
              </h4>
              <p className="text-dental-gold font-medium mb-4">
                Structures Specialist
              </p>

              <div className="text-white space-y-4">
                <p>
                  "I came to Dental Quick to do my internship for the Vocational
                  Training Cycle, they opened the doors for me, and here I am."
                </p>
                <p>
                  The welcome was wonderful, and I met fantastic colleagues who
                  helped me a lot to continue learning and training, with
                  constant supervision and support, especially in my early
                  stages, until I finally got the job."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto max-w-5xl px-6 mt-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/3">
            <div className="text-center md:text-left">
              <h2 className="text-dental-gold text-5xl font-bold mb-4">
                Talk to us
              </h2>
              <h2 className="text-dental-gold text-5xl font-bold mb-4">of</h2>
              <h2 className="text-dental-gold text-5xl font-bold mb-4">YOU</h2>

              <div className="hidden md:block mt-8">
                <img
                  src="/images/icons/reshot-icon-share-arrow-WS4HD3PU8X-325a1 1.png"
                  alt="Arrow"
                  className="w-24 h-24 object-contain ml-auto"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="bg-black border border-dental-gold rounded-lg p-8">
              <h3 className="text-dental-gold text-xl font-bold mb-6 text-center">
                FILL OUT THE FORM AND SEND US YOUR CV
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="text-white block mb-2"
                      >
                        Name and surname
                      </label>
                      <Input
                        id="fullName"
                        className="bg-black border-dental-gold text-white"
                        {...form.register("fullName")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="text-white block mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phoneNumber"
                        className="bg-black border-dental-gold text-white"
                        {...form.register("phoneNumber")}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-white block mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-black border-dental-gold text-white"
                        {...form.register("email")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-white block mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        className="bg-black border-dental-gold text-white min-h-[100px]"
                        {...form.register("message")}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name="acceptPrivacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="border-dental-gold data-[state=checked]:bg-dental-gold data-[state=checked]:text-black"
                              />
                            </FormControl>
                            <label
                              htmlFor="acceptPrivacy"
                              className="text-white text-sm"
                            >
                              I have read and accept the PRIVACY POLICY
                              (required)
                            </label>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="text-center">
                      <a
                        href="#"
                        className="text-dental-gold text-sm underline"
                      >
                        PRIVACY POLICY
                      </a>
                    </div>

                    <div>
                      <label htmlFor="cv" className="text-white block mb-2">
                        Your CV:
                      </label>
                      <div className="flex items-center space-x-4">
                        <Input
                          id="cv"
                          type="file"
                          className="hidden"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                        />
                        <label
                          htmlFor="cv"
                          className="border border-dental-gold rounded px-4 py-2 text-dental-gold cursor-pointer hover:bg-dental-gold hover:text-black transition-colors"
                        >
                          Upload file
                        </label>
                        {file && (
                          <span className="text-white text-sm">
                            {file.name}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-dental-gold hover:bg-dental-darkGold text-black font-bold py-3"
                      >
                        Submit Form
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-dental-gold w-full mt-20"></div>
    </section>
  );
};

export default WorkTestimonialsSection;
