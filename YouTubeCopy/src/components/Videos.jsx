import './Videos.css';

export function Videos() {
    return (
        <div className="video-container">
            <div className="video">
                <div className="video-img-container">
                    <div className="video-img">
                    </div>
                    <div className="video-length">
                        11:30
                    </div>
                </div>
                <div className='video-info-container'>
                    <div className="video-account-icon">
                    </div>
                    <div className='video-title-name-date'>
                        <div className="video-title">
                            Top 10 player best moment in valorant
                        </div>
                        <div className="video-channel-name">
                            valorant japan
                        </div>
                        <div className="video-viewer-date">
                            <div className='video-viewers'>
                                15万回　視聴
                            </div>
                            <div className="video-date">
                                2025, 5.10
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}