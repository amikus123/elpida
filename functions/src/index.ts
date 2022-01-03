const f = require("firebase-functions");

export const createStripeCheckout = f.https.onCall(
  async (data: any, contenxt: any) => {
    const stripe = require("stripe")(f.config().stripe.secret);

  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://elpida-6c698.web.app/success",
      cancel_url: "https://elpida-6c698.web.app/fail",
      line_items: data
    });
    return {
      id: session.id,
    };
  }
);
