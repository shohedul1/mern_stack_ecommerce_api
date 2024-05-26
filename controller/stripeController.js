import Stripe from "stripe";

export const postStripe = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const reqBody = req.body; // Use req.body to get the JSON payload
    console.log(reqBody); // Log the request body for debugging

    const extractingItems = reqBody.map((item) => ({
      quantity: item.qty,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          // images: [item.image],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: extractingItems,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    console.log("Stripe session created:", session); // Log the session for debugging

    return res.status(200).json({
      message: "Connection is Active",
      success: true,
      id: session.id,
    });
  } catch (error) {
    console.error("Stripe error:", error); // Log the error for debugging
    return res.status(500).json({ error: error.message });
  }
};
