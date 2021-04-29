import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function NavArrow() {
  return (
    <>
      <ArrowRightAltIcon
        style={{
          fontSize: '60px',
          color: '#33312F',
          transform: 'rotate(90deg)',
        }}
      />
      <div className="scroll-text">
        <p className="scroll-word">Scroll</p>
        <p className="scroll-word">For</p>
        <p className="scroll-word">More</p>
      </div>
    </>
  );
}
