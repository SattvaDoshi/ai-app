'use client'
import { UserSubscriptionContext } from "@/app/(context)/UserSubscrption";
import { Button } from "@/components/ui/button";
import { db } from "@/utlis/DB";
import { userSubscriptionSchema } from "@/utlis/Schema";
import { useUser } from "@clerk/nextjs";
import axios from 'axios'
import { Loader2Icon } from "lucide-react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";

function Billing() {

  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { user } = useUser()
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      console.log('Razorpay script loaded');
      setRazorpayLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const createSubscription = async () => {
    if (!razorpayLoaded) {
      console.error('Razorpay not loaded yet');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/create-subscription', {});
      console.log('Subscription created:', res.data);
      await opPayment(res.data.id);
    } catch (error) {
      console.error('Subscription creation error:', error);
      setLoading(false);
    }
  };

  const opPayment = (subId: string) => {
    return new Promise((resolve, reject) => {
      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay not available');
        setLoading(false);
        reject(new Error('Razorpay not available'));
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: subId,
        name: "AI App",
        description: "AI App Subscription",
        handler: async (response: any) => {
          setLoading(false);
          resolve(response);
          if (response)
            saveSubscription(response?.razorpay_payment_id)
        },
      };


      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        console.error('Payment failed:', response.error);
        setLoading(false);
        reject(new Error('Payment failed'));
      });
      rzp.open();
    });
  };

  const saveSubscription = async (paymentId: string) => {
    const result = await db.insert(userSubscriptionSchema)
      .values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentID: paymentId,
        joinDate: moment().format('DD/MM/yyyy')
      })
    if (result)
      window.location.reload();
  }

  return (
    <div className="pt-5 bg-slate-100">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        <p className="mx-auto mt-6 max-w-2xl text-center font-bold md:text-2xl text-xl leading-8">
          Choose the product that works best
        </p>
        <div className=" mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className=" rounded-3xl p-8 xl:p-10 shadow-lg">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-2xl font-bold text-primary">
                Free Plan
              </h2>

            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-extrabold tracking-tight">₹ 0</span>
              <span className="text-xl font-medium ">/month</span>
            </p>
            <Button

              aria-describedby="product1" className="mt-8 block w-full text-center text-sm font-semibold">
              Buy Now
            </Button>
            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-blue-200">
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">All AI Tools</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">10,000 free Credits</span>
              </li>

            </ul>
          </div>
          <div className=" rounded-3xl p-8 xl:p-10 shadow-lg">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-2xl font-bold text-primary">
                Gold Plan
              </h2>
              <span className="inline-flex items-center rounded-full bg-blue-400 px-3 py-0.5 text-sm font-medium text-blue-900">
                Most Popular
              </span>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-extrabold tracking-tight">₹ 99</span>
              <span className="text-xl font-medium ">/month</span>
            </p>
            <Button
              disabled={loading}
              onClick={() => createSubscription()}
              aria-describedby="product1" className="mt-8 w-full text-center text-sm font-semibold">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Loader2Icon className="animate-spin" />
                </div>
              ) : userSubscription ? (
                "Active Plan"
              ) : (
                "Buy Now"
              )}
            </Button>
            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-blue-200">
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">All AI Tools</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">100,000 free Credits</span>
              </li>
             

            </ul>
          </div>
          <div className=" rounded-3xl p-8 xl:p-10 shadow-lg">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-2xl font-bold text-primary">
                Platinum Plan
              </h2>

            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-extrabold tracking-tight">₹ 149</span>
              <span className="text-xl font-medium ">/month</span>
            </p>
            <Button
            disabled
              aria-describedby="product1" variant={'secondary'} 
              className="mt-8 block w-full text-center text-sm font-semibold">
              Currently not available
            </Button>
            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-blue-200">
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">All AI Tools</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">Unlimited Credits</span>
              </li>
              <li className="flex gap-x-3 items-center">
                <svg className="h-5 w-5 flex-none text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span className="text-primary">Access to History</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Billing;
