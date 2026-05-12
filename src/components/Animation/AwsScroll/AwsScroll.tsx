import "./AwsScroll.css";

const AwsScroll = () => {
  const icons1: string[] = [
    "/img/EC2.png",
    "/img/IoT Core.png",
    "/img/API Gateway.png",
    "/img/Kinesis.png",
    "/img/RDS.png",
    "/img/Amplify.png",
    "/img/SageMaker.png",
  ];
  const icons2: string[] = [
    "/img/RDS.png",
    "/img/Kinesis Firehose.png",
    "/img/Snowball.png",
    "/img/Athena.png",
    "/img/Marketplace Light.png",
    "/img/AppSync.png",
    "/img/Elastic Container Registry.png",
  ];
  const icons3: string[] = [
    "/img/Managed Blockchain.png",
    "/img/Simple Storage Service.png",
    "/img/Route 53.png",
    "/img/Network Firewall.png",
    "/img/Direct Connect.png",
    "/img/Fargate.png",
    "/img/aws5.png",
  ];
  const icons4: string[] = [
    "/img/AppSync.png",
    "/img/lex.png",
    "/img/Lambda.png",
    "/img/Outposts family.png",
    "/img/CodeBuilt.png",
    "/img/Redshift.png",
    "/img/DynamoDB.png",
  ];

  const repeated1: string[] = [...icons1, ...icons1];
  const repeated2: string[] = [...icons2, ...icons2];
  const repeated3: string[] = [...icons3, ...icons3];
  const repeated4: string[] = [...icons4, ...icons4];

  return (
    <div className="aws-container">
      <div className="aws-img">
        {repeated1.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </div>
      <div className="aws-img">
        {repeated2.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </div>
      <div className="aws-img">
        {repeated3.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </div>
      <div className="aws-img">
        {repeated4.map((icon, index) => (
          <img key={index} src={icon} alt={`AWS Icon ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default AwsScroll;
