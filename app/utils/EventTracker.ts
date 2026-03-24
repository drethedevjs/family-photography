import EventCategory from "./EventCategories";

const hfEventTracker = (eventName: string, parameters: any = {}) => {
  if (import.meta.client) {
    useTrackEvent(eventName, parameters);
  }
};

export const bookASessionTracker = () => {
  hfEventTracker("book_session_btn", {
    event_category: EventCategory.CONTACT
  });
};

export const offeringDetailsTracker = () => {
  hfEventTracker("offering_detail_btn", {
    event_category: EventCategory.INVESTMENT
  });
};

export const tellMeMoreTracker = () => {
  hfEventTracker("tell_me_more_btn", { event_category: EventCategory.ABOUT });
};

export const bookMeTracker = (price: string | undefined) => {
  hfEventTracker("book_me_btn", {
    event_category: EventCategory.INVESTMENT,
    price
  });
};

export const callMeTracker = () => {
  hfEventTracker("call_me_btn", { event_category: EventCategory.CONTACT });
};

export const emailMeTracker = () => {
  hfEventTracker("email_me_btn", { event_category: EventCategory.CONTACT });
};

export const galleryTracker = (galleryName: string) => {
  hfEventTracker("view_gallery", {
    event_category: EventCategory.GALLERY,
    galleryName
  });
};

export const contactPaneTracker = () => {
  hfEventTracker("contact_pane", {
    event_category: EventCategory.CONTACT
  });
};
