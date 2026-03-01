// Single FAQPage schema for the homepage
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Rice Purity Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Rice Purity Test is a 100-question anonymous self-assessment quiz that measures personal experiences and behaviors. Respondents check off items they have experienced, and the resulting score (100 minus checked items) represents their purity score."
      }
    },
    {
      "@type": "Question",
      "name": "How is the purity score calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your purity score is calculated as: 100 minus the number of items you checked. The result is a number between 0 (experienced everything) and 100 (experienced nothing)."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data private and anonymous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Rice Purity Test is completely anonymous. We do not collect or store personal information. Your responses are only used to calculate your score, which you can optionally share."
      }
    }
  ]
};
