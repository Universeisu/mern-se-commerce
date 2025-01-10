const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row item-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <div className="subtitle">testimonials</div>
            <h2 className="title">What our customers say about us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              As a software developer, I'm always on the fookout for unique
              accessories to express my love for coding. The Keyboard Key
              Keychain is not only stylish but also durable. Will definitely be
              purchasing more items!
            </blockquote>
            <div className="flex item-center gap-4 flex-warp">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex item-center gap-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                      defaultChecked
                    />
                  </div>
                  <span className="font-semibold">4.9</span>
                  <span className="text-[#907E7E]">(18.6k Review)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
