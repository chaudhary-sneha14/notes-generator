import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { updateCredits } from "../redux/userSlice";
import { generateNotes } from "../Services/api";
import { useEffect } from "react";

const TopicForm = ({ setResult, setLoading, setError, loading }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    topic: "",
    classLevel: "",
    examType: "",
    revisionMode: false,
    includeDiagram: false,
    includeChart: false,
  })
  const[progress,setProgress]=useState(0)
  const[progressText,setProgressText]=useState("")

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response = await generateNotes(formData);

      console.log("API RESPONSE:", response);

      // ✅ Only store actual notes content
      setResult(response.content);
localStorage.setItem("examResult", JSON.stringify(response.content));


      // ✅ Update credits safely
      if (typeof response.remainingCredits === "number") {
        dispatch(updateCredits(response.remainingCredits));
      }

      // ✅ Reset form
      setFormData({
        topic: "",
        classLevel: "",
        examType: "",
        revisionMode: false,
        includeDiagram: false,
        includeChart: false,
      });

    } catch (error) {
      console.error("Generate Error:", error);
      setError(error?.response?.data?.error || "Failed to generate notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(!loading){
      setProgress(0)
      setProgressText("")
      return;
    }

    let value=0;
    const interval = setInterval(()=>{
     value +=Math.random()*8

     if(value>=95){
      value=95
      setProgressText("Almost done..")
      clearInterval(interval)
     }
     else if(value>70)
      setProgressText("Finalize notes...")
     else if(value>40){
      setProgressText("Processing Content")
     }
     else{
      setProgressText("Genearating Notes")
     }
     setProgress(Math.floor(value))

    },700)

    return ()=>clearInterval(interval)
  },[loading])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white rounded-lg shadow-lg p-8 space-y-4"
    >
      <input
        type="text"
        placeholder="Enter Topic"
        value={formData.topic}
        onChange={(e) => handleChange("topic", e.target.value)}
        className="w-full p-3 border rounded-xl"
      />

      <input
        type="text"
        placeholder="Class Level (e.g. 10th)"
        value={formData.classLevel}
        onChange={(e) => handleChange("classLevel", e.target.value)}
        className="w-full p-3 border rounded-xl"
      />

      <input
        type="text"
        placeholder="Exam Type (e.g. Board)"
        value={formData.examType}
        onChange={(e) => handleChange("examType", e.target.value)}
        className="w-full p-3 border rounded-xl"
      />

      <Toggle
        label="Revision Mode"
        checked={formData.revisionMode}
        onChange={() =>
          handleChange("revisionMode", !formData.revisionMode)
        }
      />

      <Toggle
        label="Include Diagram"
        checked={formData.includeDiagram}
        onChange={() =>
          handleChange("includeDiagram", !formData.includeDiagram)
        }
      />

      <Toggle
        label="Include Chart"
        checked={formData.includeChart}
        onChange={() =>
          handleChange("includeChart", !formData.includeChart)
        }
      />

      <motion.button
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full py-3 rounded-xl text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Generating Notes..." : "Generate Notes"}
      </motion.button>
  
  
    {loading &&
      <div className="mt-4 space-y-2">
      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
      <motion.div 
      initial={{width:0}}
      animate={{width:`${progress}%`}}
      transition={{ease:"easeOut",duration:0.6}}
      className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">

      </motion.div>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>{progressText}</span>
        <span>{progress}%</span>
      </div>
      <p className="tet-xs text-gray-400 text-center">
        This may take up to 2-5 minutes.Please don't close or refresh the page
      </p>
      </div>
    }
      </motion.div>)
  
};

const Toggle = ({ label, checked, onChange }) => {
  return (
    <div
      onClick={onChange}
      className="flex items-center justify-between cursor-pointer p-3 border rounded-lg"
    >
      <span className="text-gray-700">{label}</span>

      <div
        className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
          checked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default TopicForm;