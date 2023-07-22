import React from "react";
import { AnimatePath } from "./components/Draw";
import { Equation, InlineEquation, Matrix, Theorem } from "./components/Math";
import { Fragments, Conclusion, Page, TextFrame, TwoCols, Transition } from "./components/Slides";

function Slides() {
  return (
    <Transition>
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
        <Equation>
          <Matrix
            elements={[
              ["a", "b", "c", "1"],
              ["d", "e", "f", "2"],
              ["g", "h", "i", "3"],
            ]}
          />
        </Equation>
        <p data-id="comment">This is the content of slide 3.</p>
      </Page>
    </Transition>
  );
}

export default Slides;
