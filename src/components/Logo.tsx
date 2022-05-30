import { tailwind } from '@theme-ui/presets';
import { FC } from 'react';

import { useGradient } from 'styles/utils';

/*~
 * UTILS
 */

const { gray } = tailwind.colors;

/*~
 * COMPONENT
 */

const Logo: FC = () => {
  const gradient = useGradient();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261 27" width={261}>
      <defs>
        <linearGradient
          id="a"
          x1="50%"
          x2="50%"
          y1="-21.727875%"
          y2="126.982245%"
        >
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
        <linearGradient
          id="b"
          x1="50%"
          x2="50%"
          y1="-69.3920901%"
          y2="134.397732%"
        >
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
        <linearGradient
          id="c"
          x1="50%"
          x2="50%"
          y1="-38.8675566%"
          y2="129.276854%"
        >
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
        <linearGradient
          id="d"
          x1="50%"
          x2="50%"
          y1="-227.888298%"
          y2="757.04575%"
        >
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
        <linearGradient
          id="e"
          x1="50%"
          x2="50%"
          y1="-675.599762%"
          y2="269.405387%"
        >
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      <g fill="none">
        <path
          fill="url(#a)"
          d="m43.47557 26 7.3876222-20.78805284h-3.9576547L43.47557 16.3377369h-.1172638L40.0309446 5.21194716H36l5.5260586 15.59103964-.747557 2.2400919h-3.8403909V26H43.47557Zm19.4657981-5.1970132v-2.9718553h-3.8110749V8.16886847h3.8110749V5.21194716h-3.8110749V0h-3.752443v5.21194716h-3.034202v2.95692131h3.034202V20.8029868h7.5635179Zm7.3289902 0v-9.0201034c0-1.1449362.2907168-2.0683515.8721498-2.770247.5814336-.70189545 1.3900649-1.05284318 2.4258958-1.05284318.8990225 0 1.539088.25387708 1.9201954.76163125.3811075.50775413.5716613 1.21960593.5716613 2.13555423v9.9460081h3.752443V10.5881677c0-1.7920735-.4055369-3.19835372-1.2166124-4.21883973-.8110746-1.02048692-2.0765475-1.53072946-3.7964169-1.53072946-1.0846906 0-1.9959287.22898778-2.7337134.68696151-.7377784.45797465-1.3363128 1.10511201-1.7956026 1.94141298V0h-3.752443v20.8029868h3.752443Zm20.1547231.3733486c1.8664492 0 3.3933225-.4803751 4.5806189-1.4411258 1.1872964-.9607506 1.9030942-2.3072946 2.1473942-4.0396323h-3.752443c-.0977202.7964772-.4055378 1.4137469-.9234528 1.8518093-.517915.4380623-1.1872964.6570936-2.0081433.6570936s-1.531759-.2563662-2.1327362-.7690982c-.6009772-.5127323-.9014658-1.2370287-.9014658-2.1728892v-1.0304423h9.8355049v-1.926479c0-1.0652787-.1587954-2.0558968-.4763844-2.9718552-.3175898-.91593658-.7768729-1.70494642-1.3778501-2.36703049-.6009772-.66204395-1.324104-1.18224277-2.1693811-1.56059736-.8452674-.37832723-1.7858214-.56748994-2.8216613-.56748994-1.0358304 0-1.9788273.19414129-2.8289902.58242389-.8501629.3882826-1.5757329.9383493-2.1767101 1.65020103-.6009772.71185174-1.0675895 1.56806434-1.3998371 2.56863867-.3322474 1.0005744-.4983714 2.1131534-.4983714 3.337737 0 1.2245836.1563517 2.3396514.4690554 3.3452039.3127024 1.0055516.7646567 1.8667426 1.3558632 2.5835726.5912054.7168295 1.3143321 1.2743636 2.1693811 1.672602.855049.3982386 1.8249186.5973578 2.9096091.5973578Zm3.004886-9.9161401h-5.995114v-.552556c0-.8562126.2833878-1.5531304.8501629-2.09075245.5667751-.53762206 1.28013-.80643309 2.1400651-.80643309.8697066 0 1.5879476.26881103 2.1547232.80643309.5667755.53762205.8501628 1.23453985.8501628 2.09075245v.552556Zm13.7491856 9.9161401c.840382 0 1.629469-.1194715 2.367264-.3584147.737785-.2389431 1.397394-.5973578 1.978827-1.0752441.581434-.4778862 1.052932-1.072755 1.414495-1.7846065.361564-.7118515.591205-1.5556192.688925-2.5313039h-3.752443c-.117263 1.0354204-.417752 1.7572277-.901465 2.1654222-.483714.4081944-1.145766.6122918-1.986157.6122918-.840391 0-1.52443-.2713001-2.052117-.8139001-.527687-.5426002-.791531-1.2917863-.791531-2.2475588v-4.2860426c0-1.0354099.278502-1.8020188.835505-2.29982764.557003-.49779789 1.216612-.7466973 1.978827-.7466973.762215 0 1.394952.1941413 1.898209.5824239.503257.38828259.803745 1.08022174.901466 2.07581854h3.752443c-.087948-.9856405-.315147-1.83438611-.681596-2.54623784-.36645-.71185173-.845278-1.29676401-1.436483-1.75473866-.591204-.45797465-1.253257-.79398752-1.986156-1.00804135-.732899-.21405384-1.5-.32107984-2.301303-.32107984-1.055374 0-2.003257.18916271-2.843648.56748994-.840391.37832633-1.561075.92341536-2.162052 1.63526709-.600977.71185173-1.062704 1.5780206-1.385179 2.59850656-.322476 1.0204861-.483714 2.1728892-.483714 3.4572085 0 1.2046715.14658 2.2998277.43974 3.2854682.293159.9856404.735342 1.8318974 1.326547 2.5387708.591205.7068734 1.316775 1.2594296 2.17671 1.657668.859935.3982386 1.861564.5973578 3.004886.5973578Zm16.534202 0c1.143323 0 2.159609-.1941413 3.04886-.5824239.889251-.3882826 1.63925-.9458165 2.25-1.6726019.610749-.7267855 1.074919-1.5879764 1.392508-2.5835727.317589-.9955962.476384-2.1056864.476384-3.3302699 0-1.2245836-.158795-2.3371626-.476384-3.337737-.317589-1.00057434-.781759-1.86176553-1.392508-2.58357262-.610737-.72180709-1.360737-1.27685238-2.25-1.66513498-.889251-.3882826-1.905537-.58242389-3.04886-.58242389-1.143322 0-2.159609.19414129-3.04886.58242389-.889251.3882826-1.639251.94332789-2.25 1.66513498s-1.077361 1.58299828-1.399837 2.58357262c-.322476 1.0005744-.483713 2.1131534-.483713 3.337737 0 1.2245835.161237 2.3346737.483713 3.3302699.322476.9955963.789088 1.8567872 1.399837 2.5835727.610745.7267857 1.360745 1.2843196 2.25 1.6726019.889251.3882826 1.905538.5824239 3.04886.5824239Zm0-2.9718552c-.938111 0-1.717427-.2563662-2.337948-.7690982-.620521-.5127323-.930782-1.2370287-.930782-2.1728892v-4.5249856c0-.9358609.310261-1.657668.930782-2.16542219.620521-.50775417 1.399837-.76163125 2.337948-.76163125.938111 0 1.717427.24889941 2.337948.7466973.620521.49779794.930782 1.22458354.930782 2.18035614v4.5249856c0 .9657284-.310261 1.6974917-.930782 2.1952901-.620521.4977981-1.399837.7466973-2.337948.7466973Zm14.760586 2.5985066v-9.0201034c0-1.1449362.273616-2.0683515.820847-2.770247.547232-.70189545 1.270359-1.05284318 2.169381-1.05284318h.029316c1.446255 0 2.169381.96572881 2.169381 2.89718548v9.9460081h3.752443v-9.0201034c0-1.1449362.276058-2.0683515.828176-2.770247.552117-.70189545 1.277687-1.05284318 2.17671-1.05284318h.029316c1.436482 0 2.154724.96572881 2.154724 2.89718548v9.9460081h3.752443V10.5881677c0-1.7920735-.393324-3.19835372-1.179968-4.21883973-.786644-1.02048692-1.961727-1.53072946-3.525244-1.53072946-2.110749 0-3.664495.97070649-4.661238 2.91211947-.342019-.93586092-.867264-1.65517871-1.575733-2.1579552-.708469-.50277557-1.614821-.75416427-2.719055-.75416427-1.016287 0-1.864007.22898778-2.54316.68696151-.679153.45797465-1.238599 1.10511201-1.678339 1.94141298V5.21194716h-3.752443V20.8029868h3.752443Zm30.605864.3733486c1.016286 0 1.905537-.2140531 2.667752-.6421596.762215-.4281063 1.392508-1.0105302 1.890879-1.7472717.498372-.7367413.867264-1.5979322 1.106678-2.5835727.239414-.9856404.359121-2.0509287.359121-3.1958644 0-1.1250237-.119707-2.1878231-.359121-3.1883975-.239414-1.00057438-.608306-1.86674325-1.106678-2.59850661-.498371-.73176335-1.128664-1.31169795-1.890879-1.73980471-.762215-.42810584-1.651466-.64215967-2.667752-.64215967-1.026059 0-1.907981.2190306-2.645766.65709362-.737785.43806211-1.346091 1.04537622-1.824918 1.82194141V0h-3.752443v20.8029868h3.752443v-2.1056864c.47882.7765652 1.08957 1.3838791 1.832247 1.8219414.742671.4380624 1.62215.6570936 2.638437.6570936Zm-1.026059-2.9718552c-1.201954 0-2.076547-.3658817-2.623779-1.097645-.547231-.7317634-.820846-1.7099369-.820846-2.9345204v-2.3296956c0-1.2245836.273615-2.2027571.820846-2.93452041.547232-.73176335 1.421825-1.09764503 2.623779-1.09764503.98697 0 1.758958.26881103 2.315961.80643309.557003.53762205.835505 1.26440775.835505 2.18035615v4.405514c0 .9159466-.280945 1.6452211-.842834 2.1878231-.561889.5426-1.331433.8139001-2.308632.8139001Zm14.73127-14.79954051V0h-3.869707v3.40493969h3.869707Zm-.058632 17.39804711V5.21194716h-3.752443V20.8029868h3.752443Zm8.369707 0v-9.0201034c0-1.1449362.290717-2.0683515.87215-2.770247.581434-.70189545 1.390065-1.05284318 2.425896-1.05284318.899022 0 1.539088.25387708 1.920195.76163125.381108.50775413.571661 1.21960593.571661 2.13555423v9.9460081h3.752443V10.5881677c0-1.7920735-.405536-3.19835372-1.216612-4.21883973-.811075-1.02048692-2.076547-1.53072946-3.796417-1.53072946-1.08469 0-1.995928.22898778-2.733713.68696151-.737779.45797465-1.336313 1.10511201-1.795603 1.94141298V5.21194716h-3.752443V20.8029868h3.752443Zm17.941368.3733486c1.182411 0 2.137622-.251388 2.865635-.7541642.728014-.5027761 1.31189-1.1822706 1.751629-2.0384837h.131922l.029316 2.4192993h5.907166v-2.9718553h-2.579805v-7.6461803c0-1.75224938-.532573-3.08137058-1.597719-3.98736361-1.065147-.90599211-2.516287-1.35898908-4.353421-1.35898908-.918566 0-1.768729.11200459-2.550488.33601378-.781759.22400919-1.456026.55006671-2.022801.97817347-.566776.42810675-1.021173.96323951-1.363193 1.60539919-.342019.64215968-.522801 1.39134625-.542345 2.24755885h3.752443c0-.7168294.239414-1.26191841.718241-1.63526706.478827-.37334865 1.099349-.56002298 1.861564-.56002298.742671 0 1.32899.18169665 1.758957.54508903.429967.36339238.644951.95328321.644951 1.76967261v1.0155083l-4.236156.3584147c-1.62215.1493395-2.863192.6819839-3.723127 1.5979322-.859934.9159489-1.289902 2.0061269-1.289902 3.2705342 0 .7168294.119706 1.363967.35912 1.941413.239414.577446.57899 1.0802223 1.01873 1.5083286.439739.4281063.950326.7616312 1.531759 1.0005743.581433.2389432 1.223941.3584147 1.927524.3584147Zm1.319219-2.9718552c-.664496 0-1.206841-.1169825-1.627036-.3509477-.420196-.2339653-.630293-.584913-.630293-1.0528432v-1.3440552c.009771-.6172699.293159-.9557725.850162-1.0155083l4.5-.4032166v.6122918c0 .9856405-.276058 1.8244303-.828175 2.5163699-.552118.6919395-1.307004 1.0379093-2.264658 1.0379093Zm21.122149 2.5985066v-2.9718553h-3.811075V8.16886847h3.811075V5.21194716h-3.811075V0h-3.752443v5.21194716h-3.034202v2.95692131h3.034202V20.8029868h7.563518Zm9.967427.3733486c1.143323 0 2.159609-.1941413 3.04886-.5824239.889251-.3882826 1.639251-.9458165 2.25-1.6726019.610749-.7267855 1.074919-1.5879764 1.392508-2.5835727.317589-.9955962.476385-2.1056864.476385-3.3302699 0-1.2245836-.158796-2.3371626-.476385-3.337737-.317589-1.00057434-.781759-1.86176553-1.392508-2.58357262-.610737-.72180709-1.360737-1.27685238-2.25-1.66513498-.889251-.3882826-1.905537-.58242389-3.04886-.58242389-1.143322 0-2.159609.19414129-3.04886.58242389-.889251.3882826-1.639251.94332789-2.25 1.66513498s-1.077361 1.58299828-1.399837 2.58357262c-.322476 1.0005744-.483713 2.1131534-.483713 3.337737 0 1.2245835.161237 2.3346737.483713 3.3302699.322476.9955963.789088 1.8567872 1.399837 2.5835727.610745.7267857 1.360745 1.2843196 2.25 1.6726019.889251.3882826 1.905538.5824239 3.04886.5824239Zm0-2.9718552c-.938111 0-1.717426-.2563662-2.337948-.7690982-.620521-.5127323-.930782-1.2370287-.930782-2.1728892v-4.5249856c0-.9358609.310261-1.657668.930782-2.16542219.620522-.50775417 1.399837-.76163125 2.337948-.76163125.938111 0 1.717427.24889941 2.337948.7466973.620521.49779794.930782 1.22458354.930782 2.18035614v4.5249856c0 .9657284-.310261 1.6974917-.930782 2.1952901-.620521.4977981-1.399837.7466973-2.337948.7466973Zm14.760586 2.5985066V8.19873636H261v-2.9867892h-8.545603V20.8029868h3.752443Z"
        />
        <path
          fill="url(#b)"
          d="M6.55462699 6.328036c.06604158.48958572.15960049 1.00022888.28618018 1.52666514 1.0757654-.25725697 2.25005871-.45168241 3.49012603-.57805452L10.951 8.49247153l-.2781472.39355114c-.3366573.48711804-.6648014.99940633-.98675415 1.53242303-.41275988.6896315-.79800244 1.3950561-1.13921728 2.1004807.3467183.7054245.7264574 1.4055848 1.14472075 2.0952163.42927028.7054245.87505098 1.3739986 1.33183858 2.0004577.8145128.0631724 1.6455361.1000229 2.4765593.1000229.5421687 0 1.0820257-.0154793 1.6180726-.0450049L16.05 18.4994715l-.1343865.1678404c-.5022421.6063765-1.0158989 1.1690784-1.5295556 1.6849859 1.3986636 1.2352981 2.7337783 2.0354816 3.7941411 2.3282198l.658801 1.2939539-.0190476-.000798c-1.4857538-.0844704-3.3817755-1.0928794-5.2979385-2.7948707-2.0032614 1.7898832-3.9845088 2.8216983-5.49796172 2.8216983-.46229107 0-.88055442-.0947585-1.23827966-.2948043-1.55197717-.8528267-1.90419894-3.5165942-1.11169996-6.8647288C2.23991031 15.8354748 0 14.2140511 0 12.5031333c0-1.7056535 2.22890338-3.3218128 5.6520587-4.33257041-.3465284-1.44933796-.47719849-2.7706185-.38750375-3.87159226l1.23404607-.00044148c-.05658093.58976418-.04058173 1.27842579.05602597 2.02950685ZM19.4158689 22.7590068l.5857761 1.0482128-.106645.0362519-.5442645-1.069281c.022192-.0045441.0439073-.0096013.0651334-.0151837Zm-12.56405479-5.602177c-.12107624.5317006-.22013861 1.0528725-.28067673 1.5477226-.25315939 2.0109865.07154505 3.5745021.82001631 3.9851224.16510395.0894942.37423563.1368734.62189156.1421378 1.14472075 0 2.82878105-.8738842 4.62291075-2.468986-.7759886-.7738613-1.5464737-1.6582742-2.2894415-2.6321813-1.23827969-.1263447-2.41602123-.3211261-3.49470039-.5738155Zm8.17264569.6896315c-.5008153.0263218-1.0126375.0368505-1.5299633.0368505-.5118222 0-1.018141-.0157931-1.5134529-.0368505.5063188.6159304 1.0181411 1.1792172 1.5299633 1.684596.5063188-.5053788 1.0181411-1.0686656 1.5134529-1.684596Zm-7.12148385-3.9114214c-.28618019.7001602-.53933959 1.4003204-.7429678 2.0794232.72095394.1684596 1.47492866.305333 2.25642071.4158846-.26966979-.4000915-.53383612-.8107118-.79249898-1.2318608-.25866286-.421149-.49531186-.842298-.72095393-1.263447ZM5.95474929 9.30766521c-.53383612.16319523-1.05116185.3369192-1.52445985.53170061-1.94822666.78965438-3.20852018 1.83726258-3.20852018 2.66376748 0 .8265049 1.26029352 1.8688487 3.20852018 2.6637674.47880147.1947814.99612719.3737698 1.54097024.536965.30819405-1.0265507.71545047-2.0952163 1.22176926-3.1902037-.51182225-1.1002518-.92458214-2.1741817-1.23827965-3.20599679Zm6.16807621 1.48545369 2.1393893 4.1965767c-.0799973.0071503-.1610474.0108055-.242984.0108055-1.4338162 0-2.5961539-1.1192881-2.5961539-2.5 0-.6601412.2657051-1.2605221.6997486-1.7073822ZM9.4109254 8.57591881c-.78699552.11055161-1.54647371.2526894-2.26742764.41588464.20913167.68436713.46229107 1.38979175.75947819 2.09521625.22564207-.421149.46229107-.842298.71545047-1.26344696.25315939-.42641337.52282919-.84229801.79249898-1.24765393Z"
          transform="translate(0 2)"
        />
        <g>
          <path
            fill="url(#c)"
            d="M2.02829268.03110151 14.495122 23.9792657h4.8965853L6.63804878.03110151z"
            transform="translate(4.8 2.000501)"
          />
          <path
            fill="url(#d)"
            d="M1.96170732.09848812.52243902 4.07429806l3.60585366-.00518359L1.98219512.03110151z"
            transform="translate(4.8 2.000501)"
          />
          <path
            fill="url(#e)"
            d="m20.9641463 19.7650108-1.572439 4.2142549-2.2434146-4.2142549z"
            transform="translate(4.8 2.000501)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
