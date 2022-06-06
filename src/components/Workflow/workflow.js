import React from 'react';

import './workflow.css';

const Workflow = () => {
    return (
        <div className='services'>
            <div className='work-flow'>
                <div className='work-title'>
                    <div className='work-inner'>
                        <span className='text'>
                            WORK FLOW
                        </span>
                        <span className='line'>
                        </span>
                    </div>
                    <h2 className='services-name'>
                        My Work Process
                    </h2>
                </div>
                <div className='work-body'>
                    <div className='flow'>
                        <div className="menu-iconc">
                            <img src="https://www.kemiadeleke.com/media/work-idea.svg" className="image-explore" alt="icon" />
                        </div>
                        <div className="flow-title">
                            Discover
                        </div>
                        <div className="flow-desc">
                            I conduct user research to identify the problem I want to solve.
                        </div>
                    </div>
                    <div className='flow'>
                        <div className="menu-iconc">
                            <img src="https://www.kemiadeleke.com/media/work-plan.svg" className="image-explore" alt="icon" />
                        </div>
                        <div className="flow-title">
                            Define
                        </div>
                        <div className="flow-desc">
                            I brainstorm possible design solutions to the identified problem.
                        </div>
                    </div>
                    <div className='flow'>
                        <div className="menu-iconc">
                            <img src="https://www.kemiadeleke.com/media/work-sketch.svg" className="image-explore" alt="icon" />
                        </div>
                        <div className="flow-title">
                            Ideate
                        </div>
                        <div className="flow-desc">
                            I create wireframes and sketches of the product I’m about to design.
                        </div>
                    </div>
                    <div className='flow'>
                        <div className="menu-iconc">
                            <img src="https://www.kemiadeleke.com/media/work-design.svg" className="image-explore" alt="icon" />
                        </div>
                        <div className="flow-title">
                            Prototype
                        </div>
                        <div className="flow-desc">
                            I create high fidelity design and prototype the screens.
                        </div>
                    </div>
                    <div className='flow'>
                        <div className="menu-iconc">
                            <img src="https://www.kemiadeleke.com/media/implement.svg" className="image-explore" alt="icon" />
                        </div>
                        <div className="flow-title">
                            Implement
                        </div>
                        <div className="flow-desc">
                            After designing, I deliver for implementation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;