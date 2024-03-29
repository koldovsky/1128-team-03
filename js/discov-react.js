const root = document.getElementById("root");

function App() {
    return (
        <section className="discoveries__brain-wrapper">
            <h1 className="discoveries__title">
                Human Brain Organoids Transplanted Into Rats Respond to Visual Stimuli
            </h1>
            <div className="discoveries__subtitle">
                The organoids could one day be used to treat brain injuries in humans.
            </div>
            <div className="discoveries__brain-container discoveries__brain-container--first">
                <div className="discoveries__brain-img discoveries__brain-img--first"></div>
                <div className="discoveries__brain-text">A slice of rat brain showing the human cortical organoid in
                    bright green.
                    Pasca Lab, Stanford University
                </div>
            </div>
            <div className="discoveries__text">
                <p>There is no simple fix for injuries in the brain: You can't just slap on some gauze or stick it in a
                    splint. But scientists are working towards new treatment methods for brain damage, and last week
                    reached
                    another milestone. In a study published February 2 in Cell Stem Cell, researchers at the University
                    of
                    Pennsylvania successfully transplanted a human brain organoid into a damaged rat brain. The organoid
                    made connections to the rest of the brain and responded to flashing light stimuli.
                </p>
                <p>"This is an exciting new part of the puzzle", says Anna Devor, a neuroscientist at Boston University
                    who
                    recently published separate research on organoids in mice.
                </p>
                <p>Compared to other organs in the body, the brain is very intricately structured, says H. Isaac Chen, a
                    translational neuroscientist at the University of Pennsylvania Perelman School of Medicine and
                    coauthor
                    of the new paper. Therefore, he explains, any treatment methods, especially transplants, need to be
                    carefully designed. "If we're thinking about repairing the brain or restoring function to the brain,
                    throwing a bunch of cells in that are unordered doesn't seem to be the best way of going about it."
                </p>
                <p>With this in mind, scientists turned to organoids as a potential solution. Organoids are
                    three-dimensional tissue cultures grown in vitro from stem cells, which can be induced to mimic the
                    structure of a given organ with specific growth factors and other molecules. Because organoids have
                    a
                    structure of their own, scientists figured they would integrate better into the brain than loose
                    cells.
                    Attempts to transplant human brain organoids into young mice and rats have recently proven
                    successful,
                    but few scientists had tried using them in adult, damaged brains.
                </p>
                <p>In this case, Chen and his team suctioned out a single tiny section from each adult rat's visual
                    cortex.
                    They then used a pipette tip to insert an organoid of human brain cells no bigger than a grain of
                    sand
                    into the empty chamber. They knew two things had to happen in order for their work to be useful for
                    brain injury research: the organoid had to form connections with the rest of the rat's brain, and it
                    also had to do something functional to help the brain that it was integrated into. After letting the
                    organoids settle, they checked on the rat's brains every month for three months to see whether the
                    organoid had survived and monitor how it was integrating into the rest of the brain.</p>
                <div className="discoveries__brain-container discoveries__brain-container--second">
                    <div className="discoveries__brain-img discoveries__brain-img--second"></div>
                </div>

                <p>As they'd hoped, more than 82 percent of the implanted organoids survived the full experiment. After
                    the
                    first month, it was clear the rats' brains were vascularizing the surviving organoids, integrating
                    them
                    into the rest of the visual system. When Chen ran a virus tracer designed to identify cells from the
                    grafted organoid within the rats' eyes, he found a direct connection between the eyes and the
                    organoid's
                    neurons, proving to him that the organoids worked structurally. Moreover, when the team showed the
                    experimental rats a flashing visual stimulus, the organoids' neurons activated, indicating they were
                    performing a function in the visual cortex. The fact that the organoid neurons were both
                    structurally
                    and functionally successful despite being just a few months old was particularly exciting to Chen.
                    “Human neurons can take a long time to mature, sometimes 9-12 months," he explains. "It was very
                    cool to
                    see that we're able to get these types of responses even at a relatively early time."
                </p>
                <p>Chen emphasizes that they are still a ways away from any clinical trials. He and his team want to
                    continue refining the structure of the organoids themselves, and get a better understanding of the
                    specific factors that control the process of organoid integration.
                </p>
                <p>Devor agrees that more work needs to be done. "Right now, we just place the organoid and then cross
                    our
                    fingers and say, 'Okay, let's just hope for the best,'" she says, "Some connectivity gets formed,
                    but
                    it's not clear to understand how." She adds that because the organoids are being added too mature
                    brain
                    tissue, the growth factors that would normally stimulate brain development are mostly gone. This
                    means
                    scientists need to find a way to add them synthetically in so that the organoid's growth will match
                    that
                    of its host brain.</p>
                <p>Although Chen says there's no way to know how their research will turn out, he is excited for what's
                    to
                    come. "[Media] like the Back to the Future movies predicted how life would be now," he says.
                    "Certain
                    things we haven't achieved yet, like flying cars, but certain things we have achieved that we didn't
                    even think about then. We are at the very beginning of the journey here, and there is still a lot to
                    figure out."
                </p>
            </div>
        </section>
    );
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
