import React from "react";
import myPro from "../assets/myProfile.png";
import Question from "./Question";
import userPro from "../assets/Logo.png";

const Questions = () => {
  const questions = [
    {
      id: 1,
      username: "Fyodor",
      image: `${myPro}`,
      user_id: 1,
      title: "Энэ reactjs component дээр алдаа гараад байх юм яах вээ?",
      desc: `import myPro from "../assets/myProfile.png";`,
      created_date: "few moments ago",
    },
    {
      id: 2,
      username: "Boldoo",
      image: `${userPro}`,
      user_id: 1,
      title: "Энэ reactjs component дээр алдаа гараад байх юм яах вээ?",
      desc: `import myPro from "../assets/myProfile.png";`,
      created_date: "few moments ago",
    },
    {
      id: 3,
      username: "Fyodor",
      image: `${myPro}`,
      user_id: 1,
      title: "Энэ reactjs component дээр алдаа гараад байх юм яах вээ?",
      desc: `df = pd.DataFrame({
    'loannum': [111, 222],
    'datadt': [dt.datetime(2024, 2, 29), dt.datetime(2024, 2, 29)],
    'balloondt_i': [dt.datetime(2024, 8, 1), dt.datetime(2024, 8, 1)],
    'balloondt': [dt.datetime(2024, 8, 1), dt.datetime(2024, 8, 1)],
    'currbal': [21662536.64, 32424669.41],
    'rate': [7.349, 7.349],
    'pmtfreq': [1, 1],
    'int_only': [None, None],
    'dpd_mult': [1, 1],
    'prinbal': [0, 0],
    'prinamt': [0, 0],
    'pmtamt': [34669, 51893],
    'intamt': [0, 0],
    'intbal': [0, 0]
})`,
      created_date: "few moments ago",
    },
  ];
  return (
    <div className="grid max-w-2xl gap-5 mx-auto">
      {questions.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
};

export default Questions;
