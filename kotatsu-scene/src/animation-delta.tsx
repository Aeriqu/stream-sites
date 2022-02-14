import { AnimationControls } from "framer-motion";

class AnimationDelta {

  private timeout: any;
  private dayControls: AnimationControls;
  private nightControls: AnimationControls;

  private transitionEase: number[] = [1, 0, .8, 0];
  private settings = {
    dayHour: 6,
    nightHour: 18,
    trasitionMinute: 0,
    transitionLength: 4200
  }

  constructor(
    dayControls: AnimationControls,
    nightControls: AnimationControls
  ) {
    this.dayControls = dayControls;
    this.nightControls = nightControls;
  }

  // TODO: Clean this up.
  updateDelta() {
    let dayState;
    const now: Date = new Date();
    let nextTransition: Date;
    let lastTransition: Date;
    const hour: number = now.getHours();
    let timeUntilTransition: number;

    if(hour < this.settings.nightHour && hour >= this.settings.dayHour) {
      dayState = true;
      lastTransition = new Date(now.getFullYear(), now.getMonth(), now.getDate(), this.settings.dayHour, this.settings.trasitionMinute);
      nextTransition = new Date(now.getFullYear(), now.getMonth(), now.getDate(), this.settings.nightHour, this.settings.trasitionMinute);
      timeUntilTransition = nextTransition.getTime() - now.getTime();
    }
    else {
      dayState = false;
      const nextDay = now.getHours() < this.settings.dayHour ? now.getDate() : now.getDate()+1;
      lastTransition = hour >= this.settings.nightHour ? 
        new Date(now.getFullYear(), now.getMonth(), now.getDate(), this.settings.nightHour, this.settings.trasitionMinute) :
        new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, this.settings.nightHour, this.settings.trasitionMinute);
      nextTransition = new Date(now.getFullYear(), now.getMonth(), nextDay, this.settings.dayHour, this.settings.trasitionMinute);
      timeUntilTransition = nextTransition.getTime() - now.getTime();
    }

    const timeSinceLastTransition = (now.getTime() - lastTransition.getTime()) / 1000; // converted into seconds
    const startingOpacity = ((1/this.settings.transitionLength) * timeSinceLastTransition);

    if(dayState) { // night to day transition
      console.log('started transitioning to day', startingOpacity)
      // Move day to the top and set opacity before starting the main transition
      this.dayControls.start({opacity: startingOpacity, zIndex: 2, transition: {duration: 0}}).then(() => {
        this.dayControls.start({opacity: 1, transition: {duration: this.settings.transitionLength - timeSinceLastTransition}});
        this.nightControls.start({opacity: 0, transition: {duration: this.settings.transitionLength - timeSinceLastTransition, ease: this.transitionEase}, transitionEnd: {zIndex: 1}});
      });
    }
    else { // day to night transition
      console.log('started transitioning to night', startingOpacity)
      // Move night to the top and set opacity before starting the main transition
      this.nightControls.start({opacity: startingOpacity, zIndex: 2, transition: {duration: 0}}).then(() => {
        this.dayControls.start({opacity: 0, transition: {duration: this.settings.transitionLength - timeSinceLastTransition, ease: this.transitionEase}, transitionEnd: {zIndex: 1}});
        this.nightControls.start({opacity: 1, transition: {duration: this.settings.transitionLength - timeSinceLastTransition}});
      });
    }
    
    // Set timeout to call updatedelta again when it's time to transition
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.updateDelta();
    }, timeUntilTransition + 10)
  }
}

export default AnimationDelta;