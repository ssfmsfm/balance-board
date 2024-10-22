import { FINISH_TYPE } from "@/constants/enums";
import { NextResponse } from "next/server";
import { md5 } from "js-md5";
import { v4 as uuidv4 } from "uuid";

export type FormState = {
  goodQuantity: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  zip: string;
  street: string;
};

export async function POST(request: Request) {
  // console.log(request);
  const { state, origin }: { state: FormState; origin: string } =
    await request.json();
  console.log(state);
  const password = process.env.PASSWORD || "",
    projectid = process.env.PROJECT_ID || "",
    orderid = uuidv4(); // Replace with your actual project ID, // Your project password

  // Step 1: Prepare the parameters
  const params = {
    projectid,
    orderid,
    amount: (1000).toString(),
    // amount: (119 * state.goodQuantity * 100).toString(),
    currency: "EUR",
    p_firstname: state.firstName,
    p_lastname: state.lastName,
    p_email: state.email,
    country: state.country,
    p_city: state.city,
    p_zip: state.zip,
    p_street: state.street,
    accepturl: `${origin}/order?paymentResult=${FINISH_TYPE.SUCCESSFUL}`, // URL for successful payment,
    cancelurl: `${origin}/order?paymentResult=${FINISH_TYPE.UNSUCCESSFUL}`, // URL for canceled payment,
    callbackurl: `${origin}/api?orderId=${orderid}`, // URL for payment confirmation. should retry text "OK",
    // test: "1",
    version: "1.8",
  };

  // Step 2: URL encode the parameters
  const encodedParams = new URLSearchParams(params).toString();
  // Step 3: Base64 encode the parameters
  const base64Data = btoa(encodedParams);
  // Step 4: Generate the sign
  const sign = md5(base64Data + password); // MD5 hash

  // Step 5: Construct the final payment URL
  const paymentUrl = `https://www.paysera.com/pay/?data=${base64Data}&sign=${sign}`;

  return NextResponse.json({ link: paymentUrl });
}
