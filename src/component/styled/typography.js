import styled from "styled-components"


const generateFontColor =(color,alpha=1)=>{
   if(color === 'light'){
    return `rgba(255,255,255,${Number(alpha)})`
   }else{
    return `rgba(30,39,46,${Number(alpha)})`
   }
 }
 export const TEXT = styled.p`
   font-size:${props=>`var(--${props.size})`};
   font-weight:${props=>`var(--${props.weight})`};
   line-height:${props=>`var(--${props.lineHeight})`};
   color:${props=>generateFontColor(props.color, props.alpha)}
   margin:0;
   padding:0;
 `;
 