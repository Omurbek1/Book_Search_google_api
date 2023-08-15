import React from 'react'
import '../../style/style.css'
interface Props {
  handleLoadMore: () => void,
  disabled?: boolean
}
function LoadMore({ handleLoadMore,disabled }: Props) {
  return (
    <div className='load-more-container'>
                            <button
                                onClick={handleLoadMore}
                                className={`load-more-button`}
                                disabled={disabled}
                            >
                                {disabled ? "Loading..." : "Load more"}
                            </button>
                        </div>
  )
}

export default LoadMore