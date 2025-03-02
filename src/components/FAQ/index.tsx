import IntrodcutionBoxLayout from "../IntrodcutionBoxLayout";
import { FaqLists } from "../types/faqLists";

type FaqListsProps = {
  faqLists: FaqLists[];
};

function breakline(text: string) {
  return text.split("\n").map((line, index) => {
    return <p key={index}>{line}</p>;
  });
}

export default function FAQ({ faqLists }: FaqListsProps) {
  return (
    <IntrodcutionBoxLayout title="よくある質問" scrollTargetName="#faq">
      <div className="w-full">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {faqLists.map((faq, index) => {
            return (
              <details className="group" key={index}>
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium dark:text-white">
                  {faq.question}
                  <div className="text-secondary-500 dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-neutral-600 dark:text-gray-400">
                  {breakline(faq.answer)}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </IntrodcutionBoxLayout>
  );
}
