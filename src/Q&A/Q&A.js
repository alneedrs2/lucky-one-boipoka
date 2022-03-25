import React from "react";
import { ListGroup } from "react-bootstrap";

const QA = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="ms-2">
          What is the difference between Props and State?
        </h1>
        <p className="mt-3">
          <ListGroup variant="flush">
            <ListGroup.Item>
              ১. Props হলো Read Only অর্থাৎ অপরিবর্তনশীল। অন্যদিকে State এর
              পরিবর্তন হয় ashynchronus ভাবে।{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              ২. State মিউটেবল হলেও Props মিউটেবল নয়।
            </ListGroup.Item>
            <ListGroup.Item>
              ৩. Props এক component থেকে অন্য component এ বিভিন্ন শর্ত সাপেক্ষে
              ডাটা pass করে। অন্যদিকে State যেই component এ রাখা হয় শুধু তার
              তথ্য দিতে পারে।
            </ListGroup.Item>
            <ListGroup.Item>
              ৪. Props কে তার parents component কে pass করা যায়। অপরদিকে, State
              শুধু তার নিজস্ব component কে ধারণ করে, অর্থাৎ এটি আর কোনো
              component এ যায়না।
            </ListGroup.Item>
          </ListGroup>
        </p>
      </div>
      <div className="mt-5">
        <h1 className="ms-2">React কিভাবে কাজ করে?</h1>
        <p className="m-2">
          রিঅ্যাক্ট প্রথমেই একটা ব্রাউজারের ডমের মতো দেখতে একই আরেকটা ডম তৈরী
          করে যেটাকে ভার্চুয়াল ডম বলা হয়। এখন এই ডম দেখতে পুরো সেই আসল ডমের
          মতোই, কিন্তু এই ভার্চুয়াল ডমটা আসলে একটা জাভাস্ক্রিপ্ট অবজেক্ট।
          রিঅ্যাক্ট এটাকে এমনভাবে তৈরী করে যে এই ডমের সাথে সহজেই জাভাস্ক্রিপ্ট
          ইউজ করে যেকোনো ইলিমেন্ট মডিফাই করা যায় কম সময়ের মধ্যে। এখন আগেরটার
          সাথে ভার্চুয়াল ডমের তুলনা করে রিঅ্যাক্ট দেখে আসলে নতুন কোন ইলিমেন্ট
          পরিবর্তন করা হয়েছে। সে অনুসারে রিঅ্যাক্ট পুরো ডমটাকে রি-রেন্ডার না করে শুধুমাত্র যেই জিনিসটা চেঞ্জ হয়েছে সেটাকেই চেঞ্জ করে।
          এতে সহজেই দ্রুত কাজ হয়ে যায় আর অতিরিক্ত, অপ্রয়োজনীয় কোনো কাজও করতে হয়
          না ব্রাউজারের। আর এভাবেই, এই টেকনিক ইউজ করেই রিঅ্যাক্ট এতো দ্রুত 
          রেন্ডার করে কাজ করে।
        </p>
      </div>
    </div>
  );
};

export default QA;
