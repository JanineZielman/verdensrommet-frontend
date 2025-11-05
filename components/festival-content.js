import React, {useEffect} from "react"
import ReactMarkdown from "react-markdown";
import Image from "../components/image"
import Collapsible from 'react-collapsible';
import Slider from "react-slick";

const Content = ({ page }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	useEffect(() => {
    var text = document.getElementsByTagName('p');
		for (let i = 0; i < text.length; i++) { 
			var links = text[i].getElementsByTagName('a');
			for (let j = 0; j < links.length; j++) { 
				if (links[j].href.includes('http')) {
					if (links[j].href.includes('#') == false) {
						if (links[j].href.includes('verdensrommet') == false) {
							links[j].setAttribute('target', '_blank');
						}
					}
				} 
			}
		}
  }, []);

  return (
	<>		
			{page.section.map((item, i) => {
				return (
					<>
							{item.text?.[0] && 
							<div className="text-section">
                <div className="wrapper">
                  {item.title && 
                    <h2>{item.title}</h2>
                  }
                  <div style={{padding: "5px 0"}}>
                    <ReactMarkdown 
                      key={'text'+i}
                      children={item.text} 
                    />
                  </div>
                </div>
							</div>
							}
							{item.image?.[0] && 
								<>
									{item.image.map((content, i) => {
										return(
											<>
											{content.image &&
												<div className={`content-image ${content.small ? 'small': ''}`}>
													<Image image={content.image}/>
													<div className="caption">{content.image?.caption}</div>
												</div>
											}
											</>
										)
									})}
								</>
							}
							{item.columns?.[0] && 
								<>
									{item.columns.map((content, i) => {
										return(
											<div className="columns">
												<div className="medium">
													<ReactMarkdown 
														key={'column-1'+i}
														children={content.column_1} 
													/>
												</div>
												<div className="medium">
													<ReactMarkdown 
														key={'column-2'+i}
														children={content.column_2} 
													/>
												</div>
											</div>
										)
									})}
								</>
							}
							{item.links?.[0] && 
								<div className="sources">
									{item.links.map((content, i) => {
										return(
											<>
											{content.link_url &&
												<a target="_blank" href={content.file ? 'https://cms.verdensrommet.network/' + content.link_url : content.link_url}>
													{content.link_text}
													{content.popup &&
														<div className="popup"> 
															<span>?</span> 
															<div className="hidden">{content.popup}</div>
														</div>
													}
												</a>
											}
											</>
										)
									})}
								</div>
							}
						{item.question && (
              <div className="collapsible-wrapper">
                <Collapsible
                  trigger={
                    <div className="collapsible-trigger">
                      <span>{item.title}</span>
                      <span>{item.question}</span>
                    </div>
                  }
                >
                  {item.answer && (
                    <ReactMarkdown>
                      {item.answer}
                    </ReactMarkdown>
                  )}
                </Collapsible>
              </div>
            )}
							{item.slider?.slider && 
								<div className="image-slider">
									<Slider {...settings}>
										{item.slider.slider.map((content, i) => {
											return(
												<div className={`${item.slider.small ? 'small': ''}`}>
													<Image image={content}/>
													<div className="caption">{content.caption}</div>
												</div>
											)
										})}
									</Slider>
								</div>
							}
					</>
				)
			})}
	
	</>
  )
}

export default Content
