import React from "react";
import Page from "./components/Slides/Page";
import Fragments from "./components/Slides/Fragments";
import InlineEquation from "./components/Math/InlineEquation";
import Theorem from "./components/Math/Theorem";
import Conclusion from "./components/Slides/Conclusion";
import AnimatePath from "./components/Draw/AnimatePath";
import TextFrame from "./components/Slides/TextFrame";
import TwoCols from "./components/Slides/TwoCols";

function Slides() {
  return (
    <>
      <Page title="Slide 1.1">
        <Fragments transitionClass="fade-up">
          <p>This is the content of slide 1. haha</p>
          <p>haha</p>
          <div>
            We have that <InlineEquation>y = kx + b</InlineEquation>
          </div>
          <Theorem>
            Suppose that you have an{" "}
            <InlineEquation>{`f \\in \\mathcal{F}`}</InlineEquation>.
          </Theorem>
          <Conclusion size="10" className="mt-4">
            haha
          </Conclusion>
        </Fragments>
      </Page>

      <Page title="Slide 1.2">
        <p>This is the content of slide 2.</p>
        <svg className="w-full" viewBox="0 0 400 200">
          <Fragments>
            <AnimatePath
              d="M 50 50 a 50 50 0 0 1 50 50"
              arrowSize="0"
              transitionDuration="1000"
            />
            <AnimatePath
              d="M 50 50 h 100 a 10 10 0 0 1 10 10 v 100 a 10 10 0 0 0 10 10 h 20 v-150"
              transitionDuration="2000"
            />
          </Fragments>
        </svg>
      </Page>

      <Page title="Slide 2" data-transition="zoom">
        <p>This is the content of slide 2.</p>
        <TextFrame className="text-center rounded-md">haha</TextFrame>
      </Page>

      <Page title="Two Columns" data-auto-animate="">
        <p className="">This is the content of slide 2.</p>
        <TwoCols
          left={
            <p className="w-full h-[400px] border-2 border-black">
              This shows on the left.
            </p>
          }
          right={
            <p className="w-full h-[400px] border-2 border-black">
              This shows on the right.
            </p>
          }
        />
      </Page>

      <Page title="Slide 2" data-auto-animate="">
        <p data-id="comment">This is the content of slide 2.</p>
        <TwoCols
          left={
            <p className="pt-20 w-full h-[400px] border-2 border-black">
              This shows on the left.
            </p>
          }
          right={
            <p className="w-full h-[400px] border-2 border-black">
              This shows on the right.
            </p>
          }
        />
      </Page>

      <Page title="Slide 3" data-auto-animate="">
        <p data-id="comment">This is the content of slide 3.</p>
      </Page>
    </>
  );
}

export default Slides;
