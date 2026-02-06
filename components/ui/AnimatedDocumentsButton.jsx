'use client';

export default function AnimatedDocumentsButton({ text = 'Documents' }) {
    return (
        <>
            {/* INTERNAL CSS */}
            <style>{`
        .doc-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 18px;
          height: 46px;
          border-radius: 8px;
        //   background: rgba(110,160,70,0.9);
          cursor: pointer;
          overflow: hidden;
          transition: transform .4s ease, box-shadow .4s ease;
          box-shadow: 0 6px 18px rgba(110,160,70,.35);
        }

        /* SWEEP EFFECT */
        .doc-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60px;
          width: 0;
          height: 100%;
          background: rgba(255,255,255,0.18);
          transform: skewX(35deg);
          transition: width .8s ease;
          z-index: 0;
        }

        .doc-btn:hover::before {
          width: 260%;
        }

        .doc-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 28px rgba(110,160,70,.55);
        }

        .doc-btn:active {
          transform: scale(0.95);
        }

        /* FOLDER */
        .folder {
          width: 42px;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .fileBack {
          width: 85%;
          z-index: 1;
        }

        .filePage {
          width: 55%;
          position: absolute;
          top: 0;
          z-index: 2;
          transition: transform .35s ease;
        }

        .fileFront {
          width: 95%;
          position: absolute;
          bottom: 0;
          z-index: 3;
          transform-origin: bottom;
          transition: transform .35s ease;
        }

        .doc-btn:hover .filePage {
          transform: translateY(-6px);
        }

        .doc-btn:hover .fileFront {
          transform: rotateX(30deg);
        }

        .doc-text {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          color: white;
          z-index: 2;
        }
      `}</style>

            {/* BUTTON */}
            <button className="doc-btn">
                {/* FOLDER ICON */}
                <span className="folder">
                    {/* BACK */}
                    <svg className="fileBack" viewBox="0 0 146 113" fill="none">
                        <path
                            d="M0 4C0 1.79 1.79 0 4 0H50L64 13H142c2.2 0 4 1.8 4 4v92c0 2.2-1.8 4-4 4H4c-2.21 0-4-1.8-4-4V4Z"
                            fill="rgba(80,120,50,1)"
                        />
                    </svg>

                    {/* PAGE */}
                    <svg className="filePage" viewBox="0 0 88 99" fill="none">
                        <rect width="88" height="99" fill="white" />
                    </svg>

                    {/* FRONT */}
                    <svg className="fileFront" viewBox="0 0 160 79" fill="none">
                        <path
                            d="M2 10h156l-9 66H10L2 10Z"
                            fill="rgba(140,200,90,1)"
                        />
                    </svg>
                </span>

                {/* TEXT */}
                <span className="doc-text">{text}</span>
            </button>
        </>
    );
}
