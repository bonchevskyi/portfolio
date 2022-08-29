import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash, BsTranslate } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    //title: "UA|RU|PL|EN Translation",
    icon: <BsTranslate />,
  },
  {
    id: 2,
    //title: "Foreign Language Tutoring",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 3,
    //title: "Web Design",
    icon: <MdDesignServices />,
  },
  {
    id: 4,
    //title: "Audio Transcription",
    icon: <AiFillAudio />,
  },
  {
    id: 5,
    //title: "Programming Basics Explanation",
    icon: <BsCodeSlash />,
  },
];
