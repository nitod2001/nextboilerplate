import styles from "../../scss/Home.module.scss";
import Heading from "../Heading";
const Me = (props) => {
  return (
    <div className={styles.me_section}>
      <div className={styles.me_section_image_block}>
        <div className={styles.me_section_image_block_image}>
          <img src="/image 1.png" />
        </div>
        <div className="me_image_des">
          <div className={styles.me_section_image_block_name}>
            Hi! I Am <span>Do Tin</span>
          </div>
          <div className={styles.me_section_image_block_title}>
            {" "}
            <span>Welcome</span> to my website
          </div>
        </div>
      </div>

      <div className="me_content_block">
        <Heading title="I'm a FE Dev under trainning"></Heading>
      </div>
      <div className={styles.me_section_content_desc}>
        Currently, im a student at HCMUE
      </div>
      <div className={styles.me_section_content_intro}>{props.content}</div>
    </div>
  );
};
export default Me;
