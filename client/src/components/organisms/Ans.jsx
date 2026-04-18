import PostContent from "./PostContainer";
import Button from "./Button";
 
const Answer = ({ author, answer, onRespond }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col gap-3">
    <PostContent name={author}>
      <p className="text-sm text-gray-700 leading-relaxed pt-1">{answer}</p>
    </PostContent>
    <div className="pl-12">
      <Button onClick={onRespond}>Responder</Button>
    </div>
  </div>
);
 
export default AnswerOrganism;
 