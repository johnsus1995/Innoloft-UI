import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const WysiwygEditor = (props) => {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="WysiwygEditor">
      <Editor
        apiKey="8265hhceadx8i5n3l9s30jiy5amh9ozg4oko7kheeneodk0u"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            statusbar:false
        }}
      />
      <div className="flex justify-end gap-3 py-3">
        <button>Cancel</button>
        <button className="bg-primary text-white px-2 rounded-md py-1">Save</button>
      </div>
    </div>
  );
};

WysiwygEditor.defaultProps = {
  variant: "default",
  className: "",
};

WysiwygEditor.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default WysiwygEditor;
