import React from "react";

const AboutUs = () => {
  return (
    <div className="my-16 bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
            <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
            <blockquote>
              <div>
                <div className="text-4xl font-bold text-white">Who we are</div>
                <p className="mt-6 text-xl font-medium text-white">
                  Welcome to TalkFill, where we bring your voice to the digital
                  world. We are a team of experienced developers with a special
                  focus on creating AI-powered voice-to-text applications. Our
                  passion lies in leveraging the power of artificial
                  intelligence to bridge the gap between spoken language and
                  written text. Our team is composed of dedicated professionals
                  who have honed their skills over years of experience in the
                  field. We believe in the transformative power of technology
                  and strive to create tools that are not only functional but
                  also intuitive and user-friendly. At TalkFill, we understand
                  the importance of accurate transcription in today’s fast-paced
                  world. That’s why we’ve developed a tool that captures the
                  context from natural spoken language and converts it into
                  written text. From form filling to data collection, our
                  application can be a valuable asset in various industries. We
                  are committed to providing a tool that respects user privacy
                  and handles data with utmost care. Your trust is important to
                  us, and we work hard to maintain it. Join us on this journey
                  as we continue to innovate and transform the way you interact
                  with digital platforms. For any queries or assistance, feel
                  free to contact us at info@talkfill.com. We’re here to help
                  and look forward to hearing from you!
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
