import "./AwsScroll.scss";
import { motion } from "framer-motion";

const AwsScroll = () => {
  const icons1: string[] = [
    "/aws-logo/EC2.png",
    "/aws-logo/IoT Core.png",
    "/aws-logo/API Gateway.png",
    "/aws-logo/Kinesis.png",
    "/aws-logo/RDS.png",
    "/aws-logo/Amplify.png",
    "/aws-logo/SageMaker.png",
  ];
  const icons2: string[] = [
    "/aws-logo/RDS.png",
    "/aws-logo/Kinesis Firehose.png",
    "/aws-logo/Snowball.png",
    "/aws-logo/Athena.png",
    "/aws-logo/Marketplace Light.png",
    "/aws-logo/AppSync.png",
    "/aws-logo/Elastic Container Registry.png",
  ];
  const icons3: string[] = [
    "/aws-logo/Managed Blockchain.png",
    "/aws-logo/Simple Storage Service.png",
    "/aws-logo/Route 53.png",
    "/aws-logo/Network Firewall.png",
    "/aws-logo/Direct Connect.png",
    "/aws-logo/Fargate.png",
    "/aws-logo/AppFlow.png",
  ];
  const icons4: string[] = [
    "/aws-logo/AppSync.png",
    "/aws-logo/Lex.png",
    "/aws-logo/Lambda.png",
    "/aws-logo/Marketplace Light.png",
    "/aws-logo/CodeBuild.png",
    "/aws-logo/Redshift.png",
    "/aws-logo/DynamoDB.png",
  ];

  const repeated1: string[] = [...icons1, ...icons1, ...icons1];
  const repeated2: string[] = [...icons2, ...icons2, ...icons2];
  const repeated3: string[] = [...icons3, ...icons3, ...icons3];
  const repeated4: string[] = [...icons4, ...icons4, ...icons4];

  return (
    <div className="aws-container">
      <motion.div  whileInView={{opacity: 0, scale: .8}} transition={{
        delay: .5,
      }} viewport={{once: true}} className="aws-icon">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
      </motion.div>
      <motion.div
        whileInView={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="aws-img"
      >
        {repeated1.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </motion.div>
      <motion.div
        whileInView={{ x: ["-33.333%", "0%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          //    repeatType: "loop",
        }}
        className="aws-img"
      >
        {repeated2.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </motion.div>
      <motion.div
        whileInView={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          //    repeatType: "loop",
        }}
        className="aws-img"
      >
        {repeated3.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </motion.div>
      <motion.div
        whileInView={{ x: ["-33.333%", "0%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          //    repeatType: "loop",
        }}
        className="aws-img"
      >
        {repeated4.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

export default AwsScroll;
