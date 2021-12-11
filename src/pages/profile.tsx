import { VFC } from 'react'
import React, { useState, useRef, useEffect } from 'react';
import profile from "styles/profile.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoopIcon from '@mui/icons-material/Loop';
import Image from 'next/image'
import Spacer from "../components/util/spacer";
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import StepContent from '@mui/material/StepContent';

const Profile: VFC = () => {
  const careerSteps = ['プログラマー', 'webコーダー', '株式会社illumatics', '個人事業主'];

  const careers = useRef([]);
  careerSteps.forEach((_, i) => {
        careers.current[i] = React.createRef();
  });

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(null);
  activeStepRef.current = activeStep;

  const scorllRef = useRef(null);
  scorllRef.current = currentScrollPosition;

  const carrerAnimationEvent = () => {
      const position = window.pageYOffset;
      const windowHeightHalf = window.innerHeight / 2;

      setCurrentScrollPosition(position)

      const careerComponentPosition: number[] = careers.current.map((career) => {
          return career.current.offsetTop
      })

      const componentHeight = (target: number): number => {
        return Math.floor(target - windowHeightHalf)
      }

      switch (position > 0) {
        case position <= componentHeight(careerComponentPosition[0]):
          setActiveStep(0);
          break;
        case position >= componentHeight(careerComponentPosition[0]) && position <= componentHeight(careerComponentPosition[1]):
          setActiveStep(1);
          break;
        case position >= componentHeight(careerComponentPosition[1]) && position <= componentHeight(careerComponentPosition[2]):
          setActiveStep(2);
          break;
        case position >= componentHeight(careerComponentPosition[3]):
          setActiveStep(3);
          break;
      }
  }

  useEffect(() => {
    window.addEventListener("scroll", carrerAnimationEvent);

    return () => {
      window.removeEventListener("scroll", carrerAnimationEvent);
    }
  },[])

  return (
    <>
      <div className={profile.wrapper}>
        <h1 className={profile.title}>プロフィール</h1>
          <div className={profile.dateListWrapper}>
            <ul className={profile.dateList}>
              <li>
                <div className={profile.dateIconWrapper}>
                  <AccessTimeIcon fontSize="small" />
                  <span>2021.05.18</span>
                </div>
              </li>
              <li>
                <div className={profile.dateIconWrapper}>
                  <LoopIcon fontSize="small" />
                  <span>2021.05.18</span>
                </div>
              </li>
          </ul>
        </div>
        <figure className={profile.eyecatch}>
          <Image
            src="/images/coffee-1281880_1280.jpg"
            alt="アイキャッチ画像"
            layout={"fill"}
            objectFit={'cover'}
          />
        </figure>
        <div className={profile.content}>
          <p className={profile.preface}>初めまして、2020年から駆け出したエンジニアのkazuyaです。<br />
          普段は正社員としてプログラマーをしています。
          <br />
          簡単にですが、自己紹介をしようと思います。最後まで読んで頂けましたら幸いです。</p>
          <Spacer margin={40} />
          <div className={profile.row}>
            <h2>名前：</h2>
            <p>杉山和也</p>
          </div>
          <div className={profile.row}>
            <h2>生年月日：</h2>
            <p>1992年5月18日（29歳）</p>
          </div>
          <div className={profile.row}>
            <h2>出身：</h2>
            <p>大阪生まれ大阪育ち</p>
          </div>
          <div className={profile.row}>
            <h2>趣味：</h2>
            <p>ゴルフ</p>
          </div>
          <div className={profile.row}>
            <h2>経歴要約：</h2>
            <div className={profile.careerWrapUp}>
              <p>2021/4~ プログラマーとして正社員として活動。</p><br />
              <p>2020/10~ フリーでwebコーダーとして活動</p><br />
              <p>2021/4~ SES会社で従事</p><br />
              <p>2021/4~ フリーでブランド品の転売などの小売り業</p><br/>
            </div>
          </div>
          <div className={profile.row}>
            <div className={profile.careerPeriod}>

            </div>
            <div className={profile.career}>
                <div className={profile.stepBar}>
                  <Stepper orientation="vertical" activeStep={activeStep}>
                    {careerSteps.map((label, index) => {
                      return (
                        <Step ref={careers.current[index]} key={index} expanded={true}>
                          <StepLabel >{label}</StepLabel>
                          <StepContent>
                            <Typography>
                              Try out different ad text to see what brings in the most customers,
                              and learn how to enhance your ads using features like ad extensions.
                              If you run into any problems with your ads, find out how to tell if
                              theyre running and how to resolve approval issues.
                            </Typography>
                            <p>
                              <span>役割：</span>PG
                            </p>
                          </StepContent>
                        </Step>
                      );
                    })}
                  </Stepper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;

