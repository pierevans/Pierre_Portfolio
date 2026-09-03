// import { FaCode } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { TbCloudComputing } from "react-icons/tb";

import "./CloudTechStack.scss";
const CloudTechStack = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="cloud-stack-overlay" onClick={handleClose}>
      <div
        className="cloud-stack-container"
        onClick={(e) => e.stopPropagation()}
      >
        <IoCloseOutline className="close-btn" onClick={handleClose} />

        <h3>
          <TbCloudComputing /> Languages and Tools:
        </h3>

        <div className="cloud-stack-categories">
          <h4>Cloud</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              <p>AWS</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>IaC</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />
              <p>Terraform</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>Containers & Orchestration</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              <p>Docker</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" />
              <p>Kubernetes</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>CI/CD</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />
              <p>GitHub Actions</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
              <p>Jenkins</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>Compute services</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="/aws-logo/EC2.png" />
              <p>EC2</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Lambda.png" />
              <p>AWS Lamba</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Elastic Beanstalk.png" />
              <p>Elastic Beanstalk</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/EC2 Auto Scaling.png" />
              <p>EC2 Auto Scaling</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Elastic Container Service.png" />
              <p>ECS</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Elastic Kubernetes Service.png" />
              <p>EKS</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Fargate.png" />
              <p>AWS Fargate</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>Storage services</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Simple Storage Service.png" />
              <p>S3</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Simple Storage Service Glacier.png" />
              <p>S3 Glacier</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/EFS.png" />
              <p>EFS</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="/aws-logo/Elastic Block Store.png" />
              <p>EBS</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>Networking, Content Delivery</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="aws-logo/Virtual Private Cloud.png" />
              <p>VPC</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Route 53.png" />
              <p>Route 53</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/CloudFront.png" />
              <p>Cloudfront</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Elastic Load Balancing.png" />
              <p>ELB</p>
            </div>
          </div>
        </div>

        <div className="cloud-stack-categories">
          <h4>Management and Governance services</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="aws-logo/CloudTrail.png" />
              <p>AWS CloudTrail</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/CloudWatch.png" />
              <p>AWS CloudWatch</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Config.png" />
              <p>AWS Config</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Auto Scaling.png" />
              <p>AWS Auto Scaling</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Trusted Advisor.png" />
              <p>AWS Trusted Advisor</p>
            </div>
          </div>
        </div>

        <div className="cloud-stack-categories">
          <h4>AWS Cost Management services</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="aws-logo/Cost and Usage Report.png" />
              <p>AWS Cost and Usage Report</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Cost Explorer.png" />
              <p>AWS Cost Explorer</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Budgets.png" />
              <p>AWS Budgets</p>
            </div>
          </div>
        </div>

        <div className="cloud-stack-categories">
          <h4>Security, identity services</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="aws-logo/Identity and Access Management.png" />
              <p>AWS IAM</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Cognito.png" />
              <p>Cognito</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Shield.png" />
              <p>AWS Shield</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Artifact.png" />
              <p>AWS Artifact</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Key Management Service.png" />
              <p>AWS KMS</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>Storage services</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="aws-logo/RDS.png" />
              <p>RDS</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/DynamoDB.png" />
              <p>DynamoDB</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Redshift.png" />
              <p>Redshift</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="aws-logo/Aurora.png" />
              <p>Aurora</p>
            </div>
          </div>
        </div>
        <div className="cloud-stack-categories">
          <h4>Other</h4>
          <div className="cloud-stack-logo-container">
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
              <p>Linux</p>
            </div>
            <div className="cloud-stack-logo">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
              <p>Bash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudTechStack;
