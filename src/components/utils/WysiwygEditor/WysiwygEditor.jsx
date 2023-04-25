import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const WysiwygEditor = (props) => {
  const { setDescription } = props;

  const editorRef = useRef(null);

  const initialValue =
    "The leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors. Our unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world. Companies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.";

  useEffect(() => {
    // if (editorRef.current) {
    //   setDescription(editorRef.current.getContent())
    // }
  }, [editorRef.current]);


  return (
    <div className="WysiwygEditor">
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        outputFormat='text'
        onEditorChange={(newText) => setDescription(newText)}
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
          statusbar: false,
        }}
      />
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
