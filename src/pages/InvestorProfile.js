import { useState, useCallback } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PortalPopup from "../components/PortalPopup";
import SwapATokens from "../components/SwapATokens";
import SignUpModalStep1Choose from "../components/SignUpModalStep1Choose";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const InvestorProfile = () => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isSwapATokensOpen, setSwapATokensOpen] = useState(false);
  const [isSignUpModalStep1ChooseOpen, setSignUpModalStep1ChooseOpen] =
    useState(false);
  const navigate = useNavigate();

  const onInvestorProfileContainerClick = useCallback(() => {
    navigate("/mobile-app");
  }, [navigate]);

  const onComponent91243Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91242Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91241Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91240Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91239Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91238Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onComponent91237Click = useCallback(() => {
    navigate("/farm-profile");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/new-market-place");
  }, [navigate]);

  const onCartIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const openConnectWallet = useCallback(() => {
    setConnectWalletOpen(true);
  }, []);

  const closeConnectWallet = useCallback(() => {
    setConnectWalletOpen(false);
  }, []);

  const onLightningIconClick = useCallback(() => {
    navigate("/your-favorite");
  }, [navigate]);

  const onLeaderBoardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const openSwapATokens = useCallback(() => {
    setSwapATokensOpen(true);
  }, []);

  const closeSwapATokens = useCallback(() => {
    setSwapATokensOpen(false);
  }, []);

  const openSignUpModalStep1Choose = useCallback(() => {
    setSignUpModalStep1ChooseOpen(true);
  }, []);

  const closeSignUpModalStep1Choose = useCallback(() => {
    setSignUpModalStep1ChooseOpen(false);
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          background-color: var(--color-white);
          width: 100%;
          height: 2671px;
          cursor: pointer;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-gray-400);
          font-family: var(--font-exo-2);
        `}
        onClick={onInvestorProfileContainerClick}
      >
        <img
          className={css`
            position: absolute;
            width: 100%;
            top: 0px;
            right: 0px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            height: 455px;
            object-fit: cover;
          `}
          alt=""
          src="/mask-group-194@2x.png"
        />
        <div
          className={css`
            position: absolute;
            width: calc(100% + 169.03px);
            right: -169.03px;
            bottom: -0.03px;
            left: 0px;
            height: 757.03px;
            font-size: var(--font-size-lg);
          `}
        >
          <div
            className={css`
              position: absolute;
              width: calc(100% - 169.03px);
              right: 169.03px;
              bottom: 0px;
              left: 0px;
              height: 622px;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                background-color: var(--color-white);
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 137px);
                left: 70px;
                border-radius: var(--br-4xl);
                background-color: var(--color-white);
                border: 1px solid var(--color-gray-200);
                box-sizing: border-box;
                width: 634px;
                height: 46px;
                font-size: var(--font-size-base);
                color: var(--color-darkgray);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 6px);
                  left: 25px;
                `}
              >
                Your email address
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 63px;
                left: 70px;
                font-size: var(--font-size-5xl);
                font-weight: 600;
              `}
            >
              Stay in the loop
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 15px);
                left: calc(50% - 259px);
                width: 147px;
                height: 229px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 600;
                `}
              >
                Marketplace
              </div>
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: calc(50% - 73.5px);
                  right: 0px;
                  left: 0px;
                  height: 188px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: var(--gap-xs);
                  font-size: var(--font-size-sm);
                  color: var(--color-dimgray);
                `}
              >
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Stories
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Top 10
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Trending
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Videos
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Based on Your Interest
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Recommended for you
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Articles
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 15px);
                left: calc(50% - 0px);
                width: 147px;
                height: 229px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 600;
                `}
              >
                Links
              </div>
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: calc(50% - 73.5px);
                  right: 0px;
                  left: 0px;
                  height: 188px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: var(--gap-xs);
                  font-size: var(--font-size-sm);
                  color: var(--color-dimgray);
                `}
              >
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Stories
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Top 10
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Trending
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Videos
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Based on Your Interest
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Recommended for you
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Articles
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 15px);
                left: calc(50% + 259px);
                width: 147px;
                height: 229px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  text-transform: capitalize;
                  font-weight: 600;
                `}
              >
                Join us
              </div>
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: calc(50% - 73.5px);
                  right: 0px;
                  left: 0px;
                  height: 188px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: var(--gap-xs);
                  font-size: var(--font-size-sm);
                  color: var(--color-dimgray);
                `}
              >
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Stories
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Top 10
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Trending
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Videos
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Based on Your Interest
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Recommended for you
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Articles
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% + 15px);
                left: calc(50% + 518px);
                width: 147px;
                height: 229px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  font-weight: 600;
                `}
              >
                Marketplace
              </div>
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: calc(50% - 73.5px);
                  right: 0px;
                  left: 0px;
                  height: 188px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: var(--gap-xs);
                  font-size: var(--font-size-sm);
                  color: var(--color-dimgray);
                `}
              >
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Stories
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Top 10
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Trending
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Videos
                </div>
                <div
                  className={css`
                    position: relative;
                  `}
                >
                  Based on Your Interest
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Recommended for you
                </div>
                <div
                  className={css`
                    position: relative;
                    text-transform: capitalize;
                  `}
                >
                  Articles
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 63px;
                left: calc(50% + 3px);
                font-size: var(--font-size-5xl);
                font-weight: 600;
              `}
            >
              Join the community
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 209px);
                left: 70px;
                font-size: var(--font-size-base);
                line-height: 22px;
                display: inline-block;
                width: 760px;
              `}
            >
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating LUMI.
            </div>
            <img
              className={css`
                position: absolute;
                top: calc(50% + 11.41px);
                left: 70px;
                width: 247.9px;
                height: 59.18px;
                object-fit: cover;
              `}
              alt=""
              src="/logo2@2x.png"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% + 87px);
                left: 70px;
                font-size: var(--font-size-base);
                line-height: 22px;
                display: inline-block;
                width: 346px;
              `}
            >
              Driving financial opportunities for billions of people in a
              trustworthy monetary framework.
            </div>
            <div
              className={css`
                position: absolute;
                width: calc(100% - 139px);
                top: calc(50% - 51.5px);
                right: 69.5px;
                left: 69.5px;
                border-top: 1px solid var(--color-gainsboro-100);
                box-sizing: border-box;
                height: 2px;
                opacity: 0.35;
              `}
            />
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/mask-group-193.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 137px);
                right: 1083px;
                width: 123.33px;
                height: 46.86px;
                text-align: center;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  border-radius: var(--br-4xl);
                  background: linear-gradient(180deg, #fceabb, #f8b500);
                  border: 1px solid var(--color-white);
                  box-sizing: border-box;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 7px);
                    left: calc(50% - 37px);
                    line-height: 18px;
                    text-transform: uppercase;
                    font-weight: 600;
                  `}
                >
                  sign up
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 210.03px);
                left: calc(50% - 0px);
                width: 264px;
                height: 48px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: var(--gap-7xs);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 48px;
                  height: 48px;
                `}
                alt=""
                src="/component-108--20.svg"
              />
              <img
                className={css`
                  position: relative;
                  width: 48px;
                  height: 48px;
                `}
                alt=""
                src="/component-108--19.svg"
              />
              <img
                className={css`
                  position: relative;
                  width: 48px;
                  height: 48px;
                `}
                alt=""
                src="/component-108--18.svg"
              />
              <img
                className={css`
                  position: relative;
                  width: 48px;
                  height: 48px;
                `}
                alt=""
                src="/component-108--17.svg"
              />
              <img
                className={css`
                  position: relative;
                  width: 48px;
                  height: 48px;
                `}
                alt=""
                src="/component-108--16.svg"
              />
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              top: 91.03px;
              right: 91.03px;
              border-radius: 50%;
              width: 358px;
              height: 358px;
            `}
            alt=""
            src="/ellipse-1999.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 153.03px;
              right: 393.03px;
              border-radius: 50%;
              width: 134px;
              height: 134px;
              opacity: 0.68;
            `}
            alt=""
            src="/ellipse-1998.svg"
          />
          <img
            className={css`
              position: absolute;
              height: 71.34%;
              width: 25.85%;
              top: 0%;
              right: 0%;
              bottom: 28.66%;
              left: 74.15%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/ellipse-1997.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 824.5px);
            left: 70px;
            font-size: var(--font-size-11xl);
            font-weight: 600;
          `}
        >
          Investor Name
        </div>
        <div
          className={css`
            position: absolute;
            height: calc(100% - 2615px);
            top: 499px;
            bottom: 2116px;
            left: calc(50% - 671.39px);
            width: 45.39px;
            font-size: var(--font-size-lgi);
            color: var(--color-goldenrod);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
            `}
          >
            <img
              className={css`
                position: absolute;
                height: 42.74%;
                width: 103.82%;
                top: 59.8%;
                right: -2.72%;
                bottom: -2.54%;
                left: -1.1%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/path-444613.svg"
            />
            <img
              className={css`
                position: absolute;
                height: 35.16%;
                width: 14.2%;
                top: 23.04%;
                right: 62.48%;
                bottom: 41.79%;
                left: 23.32%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/path-444633.svg"
            />
            <img
              className={css`
                position: absolute;
                height: 35.02%;
                width: 13.81%;
                top: 23.18%;
                right: 23.32%;
                bottom: 41.8%;
                left: 62.87%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/path-444643.svg"
            />
            <img
              className={css`
                position: absolute;
                height: 71.78%;
                width: 88.56%;
                top: 3.63%;
                right: 5.72%;
                bottom: 24.6%;
                left: 5.72%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/path-444653.svg"
            />
            <b
              className={css`
                position: absolute;
                top: calc(50% - 14.18px);
                left: calc(50% - 4.98px);
              `}
            >
              1
            </b>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 817.1px);
            right: 1387.48px;
            width: 173.11px;
            height: 19.6px;
            font-size: var(--font-size-lg);
            color: var(--color-darkgray);
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              right: 52.52px;
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 9.59px);
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 35.25px);
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 60.9px);
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 17.98px;
              height: 17.21px;
            `}
            alt=""
            src="/star-icon2.svg"
          />
          <div
            className={css`
              position: absolute;
              right: -1px;
              bottom: 0px;
            `}
          >
            (1.8)
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 837.5px);
            right: 70px;
            width: 264px;
            height: 48px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: var(--gap-7xs);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--25.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--24.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--23.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--22.svg"
          />
          <img
            className={css`
              position: relative;
              width: 48px;
              height: 48px;
            `}
            alt=""
            src="/component-108--21.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 742.63px);
            left: 70px;
            width: 307px;
            height: 48px;
            font-size: var(--font-size-sm);
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
            `}
          >
            Followers
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 248px;
            `}
          >
            Following
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 123px;
            `}
          >
            Posts
          </div>
          <div
            className={css`
              position: absolute;
              top: 22px;
              left: 0px;
              width: 58px;
              height: 26px;
              font-size: var(--font-size-7xl);
              color: var(--color-gray-400);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                font-weight: 600;
              `}
            >
              5.6M
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 22px;
              left: 248px;
              width: 43px;
              height: 26px;
              font-size: var(--font-size-7xl);
              color: var(--color-gray-400);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                font-weight: 600;
              `}
            >
              152
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 22px;
              left: 123px;
              width: 65px;
              height: 26px;
              font-size: var(--font-size-7xl);
              color: var(--color-gray-400);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                right: -1px;
                font-weight: 600;
              `}
            >
              1,529
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            height: calc(100% - 2602px);
            width: calc(100% - 1029px);
            top: 669px;
            left: 70px;
            line-height: 22px;
            display: inline-block;
          `}
        >{`Description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 843px);
            left: 652px;
            width: 113px;
            height: 59px;
            color: var(--color-white);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-5xs);
              background-color: var(--color-mediumseagreen);
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 5.77px);
              left: calc(50% - 25px);
              width: 46px;
              height: 16px;
            `}
          >
            <div
              className={css`
                position: absolute;
                bottom: 0px;
                left: calc(50% - 23px);
                font-weight: 500;
              `}
            >
              Follow
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: calc(50% - 843px);
            left: calc(50% - 175px);
            border-radius: var(--br-5xs);
            background-color: var(--color-gainsboro-100);
            width: 175px;
            height: 59px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 5.5px);
              left: calc(50% - 59px);
              font-weight: 500;
            `}
          >
            Send a Message
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            height: calc(100% - 2491px);
            top: 310px;
            bottom: 2181px;
            left: 70px;
            max-height: 100%;
            width: 180px;
          `}
          alt=""
          src="/group-55000.svg"
        />
        <div
          className={css`
            position: absolute;
            width: calc(100% - 118px);
            top: calc(50% - 560.5px);
            right: 48px;
            left: 70px;
            height: 481px;
            font-size: var(--font-size-9xl);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            Investment History
          </div>
          <div
            className={css`
              position: absolute;
              width: calc(100% - 22px);
              top: calc(50% - 192.5px);
              right: 21.5px;
              left: 0.5px;
              height: 433px;
              overflow-x: auto;
              mix-blend-mode: normal;
              font-size: var(--font-size-base);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: calc(50% - 890.5px);
                width: 2496px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: var(--gap-mid);
              `}
            >
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91243Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91242Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image1@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91241Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image2@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91240Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image3@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91239Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image4@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91238Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image5@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
              <div
                className={css`
                  position: relative;
                  width: 342px;
                  height: 433px;
                  cursor: pointer;
                `}
                onClick={onComponent91237Click}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    border-radius: var(--br-mini);
                    background-color: var(--color-white);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 6.5px);
                    left: 64px;
                    width: 134px;
                    height: 19px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 4px;
                      left: 0px;
                      font-weight: 600;
                    `}
                  >
                    Farm owner name
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 15.5px);
                    left: 64px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  16/3/2023
                </div>
                <img
                  className={css`
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    left: 0px;
                    max-width: 100%;
                    overflow: hidden;
                    height: 200px;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/agriculture-image@2x.png"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    right: 254px;
                    width: 73px;
                    height: 32px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 16px;
                      right: 10px;
                      font-weight: 600;
                    `}
                  >{`80$ | 12 `}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      font-size: var(--font-size-xs);
                      color: var(--color-darkgray);
                    `}
                  >
                    Price
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: 50%;
                      width: 21.92%;
                      top: 43.75%;
                      right: 0%;
                      bottom: 6.25%;
                      left: 78.08%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/lumi.svg"
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 64.5px);
                    right: 14px;
                    font-weight: 500;
                    color: var(--color-mediumseagreen);
                    text-align: right;
                  `}
                >
                  +0.87 %
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 30px);
                    top: calc(50% + 104.5px);
                    right: 15px;
                    left: 15px;
                    height: 30px;
                    font-size: var(--font-size-sm);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      width: 100%;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px var(--br-9xs) var(--br-9xs) 0px;
                      background-color: var(--color-gainsboro-100);
                      height: 6px;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 100%;
                        top: 0px;
                        bottom: 0px;
                        left: 0px;
                        border-radius: var(--br-9xs) 0px 0px var(--br-9xs);
                        background-color: var(--color-mediumseagreen);
                        width: 109px;
                      `}
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 157px;
                      font-weight: 500;
                    `}
                  >
                    255M$
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      color: var(--color-darkgray);
                    `}
                  >
                    Average revenue
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 0px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% + 49.5px);
                    left: calc(50% + 129px);
                    font-size: var(--font-size-xs);
                    color: var(--color-darkgray);
                  `}
                >
                  Yield
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% + 1px);
                    top: calc(50% + 156.5px);
                    right: 0px;
                    left: -1px;
                    border-top: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 2px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: calc(50% - 101px);
                    width: 156px;
                    height: 59px;
                    color: var(--color-gray-300);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-white);
                      width: 156px;
                      height: 59px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      bottom: 19.46px;
                      left: calc(50% - 55px);
                      width: 20px;
                      height: 19.54px;
                    `}
                    alt=""
                    src="/iconlylightoutlinebuy.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 19px;
                      left: calc(50% - 25px);
                      text-transform: capitalize;
                      font-weight: 500;
                    `}
                  >
                    Add to cart
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    width: 116px;
                    height: 59px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      border-radius: 0px 0px var(--br-mini) 0px;
                      background-color: var(--color-white);
                      opacity: 0.8;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: 24px;
                      bottom: 19px;
                      font-weight: 500;
                    `}
                  >
                    Buy Now
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 115px;
                    left: 225px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    width: calc(100% - 340px);
                    top: calc(50% + 156.5px);
                    right: 271px;
                    left: 69px;
                    border-right: 1px solid var(--color-gainsboro-100);
                    box-sizing: border-box;
                    height: 60px;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    height: 9.24%;
                    width: 11.7%;
                    top: 48.5%;
                    right: 83.92%;
                    bottom: 42.26%;
                    left: 4.39%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/group-54810.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 70px;
                    height: 59px;
                  `}
                  alt=""
                  src="/component-94--1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 65.5px);
                    left: 16px;
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--color-white);
                  `}
                >
                  Farm name
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 44.5px);
                    left: 16px;
                    font-size: var(--font-size-sm);
                    font-weight: 500;
                    color: var(--color-white);
                    display: inline-block;
                    width: 173px;
                    height: 17px;
                  `}
                >
                  Farm location
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 60.09px);
                    right: 14px;
                    width: 76.21px;
                    height: 32.19px;
                    font-size: var(--font-size-xs);
                    color: var(--color-white);
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      right: 1px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% + 9.89px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 6.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: calc(50% - 22.11px);
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/star-icon.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 11.21px;
                      height: 10.73px;
                    `}
                    alt=""
                    src="/icon-awesomestar.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      right: -1px;
                      bottom: 0px;
                    `}
                  >
                    (1.8)
                  </div>
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 30px;
                    height: 30px;
                  `}
                  alt=""
                  src="/share.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              top: calc(50% + 1.5px);
              right: -18px;
              width: 63px;
              height: 63px;
            `}
            alt=""
            src="/group-54749.svg"
          />
        </div>
        <div
          className={css`
            position: absolute;
            width: calc(100% - 140px);
            top: calc(50% + 52.5px);
            right: 70px;
            left: 70px;
            height: 551px;
            font-size: var(--font-size-9xl);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              text-transform: capitalize;
              font-weight: 600;
            `}
          >
            Energy I produce
          </div>
          <div
            className={css`
              position: absolute;
              height: calc(100% - 79px);
              width: 100%;
              top: 79px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              font-size: var(--font-size-sm);
              color: var(--color-darkgray);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: calc(100% - 87px);
                width: calc(100% - 80px);
                top: 87px;
                right: 77px;
                bottom: 0px;
                left: 3px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 48px;
                  right: 0px;
                  width: 117px;
                  height: 216px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: var(--gap-2xl);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 86px;
                    height: 36px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                    `}
                  >
                    Daily output:
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      font-size: var(--font-size-lg);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    54.09 kWh
                  </div>
                </div>
                <div
                  className={css`
                    position: relative;
                    width: 111px;
                    height: 36px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                    `}
                  >
                    Monthly output:
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      font-size: var(--font-size-lg);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    4,786.21 kWh
                  </div>
                </div>
                <div
                  className={css`
                    position: relative;
                    width: 117px;
                    height: 36px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                    `}
                  >
                    Total output:
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      font-size: var(--font-size-lg);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    1,221.75 MWh
                  </div>
                </div>
                <div
                  className={css`
                    position: relative;
                    width: 97px;
                    height: 36px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                    `}
                  >
                    <span>CO</span>
                    <span
                      className={css`
                        font-size: var(--font-size-5xs-7);
                        vertical-align: sub;
                      `}
                    >
                      2
                    </span>
                    <span> avoidance</span>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: 0px;
                      font-size: var(--font-size-lg);
                      font-weight: 600;
                      color: var(--color-gray-400);
                    `}
                  >
                    684.58 t
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  width: calc(100% - 221px);
                  top: 0px;
                  right: 221px;
                  left: 0px;
                  height: 309px;
                  text-align: right;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: calc(100% - 53px);
                      top: 30px;
                      bottom: 23px;
                      left: calc(50% - 658.5px);
                      width: 1381px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-52xl);
                    `}
                  >
                    <div
                      className={css`
                        width: 50px;
                        height: 211px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: calc(50% - 44.5px);
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 83px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 50px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 89px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 78px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-200);
                          width: 50px;
                          height: 44px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 28px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 211px;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 211px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: calc(50% - 44.5px);
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 83px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 233px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 83px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 150px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 83px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 89px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 111px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 50px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 89px;
                        display: flex;
                        flex-direction: column;
                        padding: 0px 0px var(--padding-48xl);
                        box-sizing: border-box;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 22px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 67px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 39px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 28px;
                          `}
                        />
                      </div>
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 117px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 78px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 28px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 50px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 172px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 133px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 72px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-orange);
                            height: 61px;
                          `}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-gold-100);
                          width: 50px;
                          height: 39px;
                        `}
                      />
                    </div>
                    <div
                      className={css`
                        width: 50px;
                        height: 256px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          background-color: var(--color-orange);
                          width: 50px;
                          height: 100px;
                        `}
                      />
                      <div
                        className={css`
                          position: relative;
                          width: 50px;
                          height: 156px;
                        `}
                      >
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: var(--color-gold-100);
                            height: 67px;
                          `}
                        />
                        <div
                          className={css`
                            position: absolute;
                            width: 100%;
                            top: 0px;
                            right: 0px;
                            left: 0px;
                            background-color: var(--color-gold-200);
                            height: 89px;
                          `}
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      height: calc(100% - 22.5px);
                      width: calc(100% - 59.5px);
                      top: 0px;
                      right: -0.5px;
                      bottom: 22.5px;
                      left: 60px;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/x-axis-line.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      bottom: 17px;
                      left: 15px;
                    `}
                  >
                    0kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 80.5px);
                      left: 0px;
                    `}
                  >
                    100kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% + 36.5px);
                      left: 0px;
                    `}
                  >
                    200kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 6.5px);
                      left: 0px;
                    `}
                  >
                    300kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 50.5px);
                      left: 0px;
                    `}
                  >
                    400kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: calc(50% - 93.5px);
                      left: 0px;
                    `}
                  >
                    500kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 17px;
                      left: 0px;
                    `}
                  >
                    600kWh
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      bottom: 0px;
                      left: calc(50% - 652.5px);
                      width: 1365px;
                      height: 15px;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                      gap: var(--gap-68xl);
                      text-align: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      10:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      11:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      12:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      13:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      14:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      15:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                        align-self: flex-start;
                      `}
                    >
                      16:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                        align-self: flex-start;
                      `}
                    >
                      17:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      18:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      19:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      20:00
                    </div>
                    <div
                      className={css`
                        position: relative;
                      `}
                    >
                      21:00
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  bottom: 0px;
                  left: calc(50% - 237px);
                  width: 556px;
                  height: 17px;
                  text-align: center;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    width: 146px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-gold-100);
                      width: 17px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 3px;
                      right: -1px;
                    `}
                  >
                    PV System 93 kWh
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: calc(50% - 73px);
                    width: 146px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-gold-200);
                      width: 17px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 3px;
                      right: -1px;
                    `}
                  >
                    PV System 93 kWh
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    width: 146px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      top: 0px;
                      bottom: 0px;
                      left: 0px;
                      background-color: var(--color-orange);
                      width: 17px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 3px;
                      right: -1px;
                    `}
                  >
                    PV System 93 kWh
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 5px;
                left: 0px;
                width: 1780px;
                height: 31px;
                font-size: var(--font-size-3xl);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  width: calc(100% + 1px);
                  right: 0px;
                  bottom: -1px;
                  left: -1px;
                  border-top: 1px solid var(--color-gainsboro-100);
                  box-sizing: border-box;
                  height: 2px;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 23px;
                  font-weight: 600;
                  color: var(--color-gray-400);
                  text-align: center;
                `}
              >
                Live
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 126px;
                  font-weight: 600;
                `}
              >
                Monthly
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 263px;
                  font-weight: 600;
                `}
              >
                Yearly
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 28px;
                  left: -3px;
                  border-top: 3px solid var(--color-gray-200);
                  box-sizing: border-box;
                  width: 89px;
                  height: 6px;
                `}
              />
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: 0px;
            right: 0px;
            left: 0px;
            height: 100px;
            color: var(--color-darkgray);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              background-color: var(--color-white);
              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
            `}
          />
          <img
            className={css`
              position: absolute;
              height: calc(100% - 40.82px);
              top: 20.41px;
              bottom: 20.41px;
              left: 70px;
              max-height: 100%;
              width: 247.9px;
              object-fit: cover;
              cursor: pointer;
            `}
            alt=""
            src="/logo2@2x.png"
            onClick={onLogoImageClick}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 15px);
              right: 70px;
              width: 202.49px;
              height: 30px;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: var(--gap-16xl);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 30px;
                height: 30px;
              `}
              alt=""
              src="/user.svg"
            />
            <img
              className={css`
                position: relative;
                width: 30px;
                height: 30px;
                cursor: pointer;
              `}
              alt=""
              src="/cart.svg"
              onClick={onCartIconClick}
            />
            <img
              className={css`
                position: relative;
                width: 20.64px;
                height: 19.17px;
                cursor: pointer;
              `}
              alt=""
              src="/wallet.svg"
              onClick={openConnectWallet}
            />
            <img
              className={css`
                position: relative;
                width: 16.85px;
                height: 22.32px;
                cursor: pointer;
                margin-top: 3px;
              `}
              alt=""
              src="/lightning.svg"
              onClick={onLightningIconClick}
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 23px);
              left: calc(50% - 573px);
              border-radius: var(--br-4xl);
              background-color: var(--color-white);
              border: 1px solid var(--color-gainsboro-100);
              box-sizing: border-box;
              width: 746px;
              height: 46px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 6px);
                left: 44px;
              `}
            >
              Search
            </div>
            <img
              className={css`
                position: absolute;
                bottom: 14px;
                left: 16px;
                width: 16.04px;
                height: 16.4px;
              `}
              alt=""
              src="/search1.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 5px);
              right: 332px;
              width: 347px;
              height: 16px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              gap: var(--gap-20xl);
              text-align: center;
              color: var(--color-gray-400);
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 600;
                cursor: pointer;
              `}
              onClick={onLeaderBoardTextClick}
            >
              LeaderBoard
            </div>
            <div
              className={css`
                position: relative;
                font-weight: 600;
                cursor: pointer;
              `}
              onClick={openSwapATokens}
            >
              Swap
            </div>
            <div
              className={css`
                position: relative;
                font-weight: 600;
              `}
            >
              Login
            </div>
            <div
              className={css`
                position: relative;
                font-weight: 600;
                cursor: pointer;
              `}
              onClick={openSignUpModalStep1Choose}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
      {isConnectWalletOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWallet}
        >
          <ConnectWallet onClose={closeConnectWallet} />
        </PortalPopup>
      )}
      {isSwapATokensOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSwapATokens}
        >
          <SwapATokens onClose={closeSwapATokens} />
        </PortalPopup>
      )}
      {isSignUpModalStep1ChooseOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpModalStep1Choose}
        >
          <SignUpModalStep1Choose onClose={closeSignUpModalStep1Choose} />
        </PortalPopup>
      )}
    </>
  );
};

export default InvestorProfile;
