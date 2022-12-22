import Heading from "../Heading";
const Me = (props: any) => {
  return (
    <div className="me_section">
      <div className="me_section_image_block">
        <div className="me_section_image_block_image">
          <img src="/image 1.png" />
        </div>
        <div className="me_image_des">
          <div className="me_section_image_block_name">
            Hi! I Am <span>Do Tin</span>
          </div>
          <div className="me_section_image_block_title">
            {" "}
            <span>Welcome</span> to my website
          </div>
        </div>
      </div>

      <div className="me_content_block">
        <Heading title="I'm a FE Dev under trainning"></Heading>
      </div>
      <div className="me_section_content_desc">
        Currently, im a student at HCMUE
      </div>
      <div className="me_section_content_intro">{props.content}</div>
    </div>
  );
};
export default Me;
