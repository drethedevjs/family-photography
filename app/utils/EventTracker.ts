import EventCategory from "./EventCategories";

const ctvEventTracker = (eventName: string, parameters: any = {}) => {
  if (import.meta.client) {
    console.info(`${eventName} tracked!`);
    useTrackEvent(eventName, parameters);
  }
};

export const bookASessionTracker = () => {
  ctvEventTracker("book_session_btn", {
    event_category: EventCategory.CONTACT
  });
};

export const offeringDetailsTracker = () => {
  ctvEventTracker("offering_detail_btn", {
    event_category: EventCategory.INVESTMENT
  });
};

export const tellMeMoreTracker = () => {
  ctvEventTracker("tell_me_more_btn", { event_category: EventCategory.ABOUT });
};

export const bookMeTracker = (price: string | undefined) => {
  ctvEventTracker("book_me_btn", {
    event_category: EventCategory.INVESTMENT,
    price
  });
};

export const callMeTracker = () => {
  ctvEventTracker("call_me_btn", { event_category: EventCategory.CONTACT });
};

export const emailMeTracker = () => {
  ctvEventTracker("email_me_btn", { event_category: EventCategory.CONTACT });
};

export const galleryTracker = (galleryName: string) => {
  ctvEventTracker("view_gallery", {
    event_category: EventCategory.GALLERY,
    galleryName
  });
};

export const contactPaneTracker = () => {
  ctvEventTracker("contact_pane", {
    event_category: EventCategory.CONTACT
  });
};
