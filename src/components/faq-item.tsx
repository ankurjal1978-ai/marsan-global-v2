import type { ReactNode } from 'react';
export function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="faq-item">
      <summary className="faq-q">
        {question}
        <span aria-hidden="true">+</span>
      </summary>
      <div className="faq-a-inner">{children}</div>
    </details>
  );
}
