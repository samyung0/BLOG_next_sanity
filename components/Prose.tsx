const Prose = ({ children }: { children: React.ReactNode }) => (
  <div
    className="prose prose-zinc md:!leading-7 !leading-6 !tracking-wide
    prose-code:!font-firaCode prose-code:!tracking-normal prose-code:md:!leading-6 prose-code:!text-sm 
    md:!text-base !text-sm xl:!max-w-[1000px] lg:!max-w-[800px] max-w-full mx-auto
  markedlines:!bg-zinc-600 markedlines:!block markedlines:!w-full
  lines:!px-[1.25em]
  prose-pre:!px-0
  hasfilename:!rounded-tl-none hasfilename:!rounded-tr-none hasfilename:!mt-0
  "
  >
    {children}
  </div>
);

export default Prose;
