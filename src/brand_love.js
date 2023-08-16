import React  from 'react'
import { useInView } from 'react-intersection-observer';
import setup from './assets/brand-love/setup.png'
import drive from './assets/brand-love/drive.png'
import smooth from './assets/brand-love/smooth.png'
import BusinessAppLinkButtons from './components/business_app_link_buttons';

function BrandLove() {

    const {ref : imageOneRef ,  inView : imageOneInView}  = useInView()
    const {ref : imageTwoRef ,  inView : imageTwoInView}  = useInView()
    const {ref : imageThreeRef ,  inView : imageThreeInView}  = useInView()

  return (
    <>
    <div className='working love-back' id='aloy-for-business' >
      <div className="working-heading love-back">
        Why brands love Aloy?
      </div>
      
      <div className='working-slider slider-love'>
        <div className='working-slider-image love-slider-image-back'>
            <img src={setup}  alt="Easy to set up" class={` ${imageOneInView ? "visible" : "invisible"}`} />
            <img src={drive} alt='Drive higher numbers' class={` ${imageTwoInView ? "visible" : "invisible"}`} />
            <img src={smooth} alt=' Smooth customer satisfaction'  class={`${imageThreeInView ? "visible" : "invisible"}`} />
        </div>
        <div>
        <div className='frame working-slider-text'>
          <div  className='working-slider-text-inner' >
            <div className='working-slider-text-heading'>
                  Easy to set up
              </div>
              <div ref={imageOneRef} className='working-slider-text-paragraph'>
              Effortlessly set up loyalty benefits with our mobile-app – takes just 5 mins to setup
              </div>
         
                <div className='working-slider-text-sub-paragraph sub-paragraph-love'>
                  GET ALOY FOR BUSINESS
                </div>
                <BusinessAppLinkButtons  aloy={false} />
          
          </div>
        </div  >
        <div className='frame working-slider-text'>
            <div  className='working-slider-text-inner' >
              <div className='working-slider-text-heading'>
              Drive repeat customers
              </div>
              <div ref={imageTwoRef} className='working-slider-text-paragraph'>
              Experience customer loyalty in action as your customer footfalls skyrocket
              </div>
          
                <div className='working-slider-text-sub-paragraph sub-paragraph-love'>
                  GET ALOY FOR BUSINESS
                </div>
                <BusinessAppLinkButtons  aloy={false} />
     
            </div>
        </div>
       
        <div className='frame working-slider-text'>
            <div  className='working-slider-text-inner' >
              <div className='working-slider-text-heading'>
              Improve customer satisfaction
              </div>
              <div ref={imageThreeRef}  className='working-slider-text-paragraph'>Elevate customer satisfaction and drive repeat business w ith just a few clicks</div>
         
                <div className='working-slider-text-sub-paragraph sub-paragraph-love'>
                  GET ALOY FOR BUSINESS
                </div>
                <BusinessAppLinkButtons  aloy={false} />
       
            </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default BrandLove


